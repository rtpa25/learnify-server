import { ThirdPartyInfo, UserDocument, UserModel } from '../models/user.model';

export async function createUser(
  email: string,
  supertokensId: string,
  thirdParty?: ThirdPartyInfo
): Promise<UserDocument> {
  const user = await UserModel.create({
    email,
    supertokensId,
    thirdParty,
  });
  return user;
}

export async function getUserBySupertokensId(supertokensId: string) {
  const user = await UserModel.findOne({ supertokensId });
  return user;
}
