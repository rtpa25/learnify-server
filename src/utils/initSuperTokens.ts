import Session from 'supertokens-node/recipe/session';
import supertokens, { deleteUser } from 'supertokens-node';
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword';
import { createUser, getUserBySupertokensId } from '../services/user.service';
import { __isProd__ } from './isProd';
let { Google } = ThirdPartyEmailPassword;

export const initSuperTokens = () => {
  supertokens.init({
    framework: 'express',
    supertokens: {
      connectionURI: process.env.SUPERTOKENS_CONNECTION_URI as string,
      apiKey: process.env.SUPERTOKENS_API_KEY as string,
    },
    appInfo: {
      appName: 'learnify',
      apiDomain: __isProd__
        ? 'https://api.learnify.site'
        : 'http://localhost:8080',
      websiteDomain: __isProd__
        ? 'https://learnify.site'
        : 'http://localhost:3000',
      apiBasePath: '/auth',
      websiteBasePath: '/auth',
    },
    recipeList: [
      ThirdPartyEmailPassword.init({
        providers: [
          Google({
            clientId:
              '1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com',
            clientSecret: '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',
          }),
        ],
        override: {
          apis: (originalImplementation) => {
            return {
              ...originalImplementation,

              // override the email password sign up API
              emailPasswordSignUpPOST: async function (input) {
                if (
                  originalImplementation.emailPasswordSignUpPOST === undefined
                ) {
                  throw Error('Should never come here');
                }

                // TODO: some pre sign up logic

                let response =
                  await originalImplementation.emailPasswordSignUpPOST(input);

                try {
                  if (response.status === 'OK') {
                    // TODO: some post sign up logic
                    const user = response.user;
                    await createUser(user.email, user.id, user.thirdParty);
                  }
                } catch (error) {
                  //user not created in mongoDB while it is in supertokens db so need to delete the user from supertokens db
                  if (response.status === 'OK') {
                    await deleteUser(response.user.id);
                  }
                }

                return response;
              },

              // override the thirdparty sign in / up API
              thirdPartySignInUpPOST: async function (input) {
                if (
                  originalImplementation.thirdPartySignInUpPOST === undefined
                ) {
                  throw Error('Should never come here');
                }

                // TODO: Some pre sign in / up logic

                let response =
                  await originalImplementation.thirdPartySignInUpPOST(input);

                try {
                  if (response.status === 'OK') {
                    //should check if the loggedIn User is in our db
                    const user = response.user;
                    const fetchedUser = await getUserBySupertokensId(user.id);
                    if (!fetchedUser) {
                      await createUser(user.email, user.id, user.thirdParty);
                    }
                  }
                } catch (error) {
                  if (response.status === 'OK') {
                    await deleteUser(response.user.id);
                  }
                }
                return response;
              },
            };
          },
        },
        signUpFeature: {
          formFields: [
            {
              id: 'username',
            },
          ],
        },
      }),
      Session.init(), // initializes session features
    ],
  });
};
