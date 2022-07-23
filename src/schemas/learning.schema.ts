import { object, string, TypeOf } from 'zod';

export const createLearningSchema = object({
  body: object({
    thumbnail: string({
      required_error: 'thumbnail is required',
    }),
    name: string({
      required_error: 'name is required',
    }),
    channelTitle: string({
      required_error: 'channelTitle is required',
    }),
    channelId: string({
      required_error: 'channelId is required',
    }),
    user: string({
      required_error: 'user is required',
    }),
    playlistId: string({
      required_error: 'playlistId is required',
    }),
  }),
});

export const getLearningSchema = object({
  query: object({
    userId: string({
      required_error: 'userId is required',
    }),
  }),
});

export type GetLearningQuery = TypeOf<typeof getLearningSchema>['query'];

export type CreateLearningInput = TypeOf<typeof createLearningSchema>['body'];
