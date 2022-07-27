import { number, object, string, TypeOf } from 'zod';

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

export const getLearningByIdSchema = object({
  query: object({
    learningId: string({
      required_error: 'learningId is required',
    }),
  }),
});

export const deleteLearningByIdSchema = object({
  query: object({
    learningId: string({
      required_error: 'learningId is required',
    }),
  }),
});

export const updateLearningSchema = object({
  body: object({
    learningId: string({
      required_error: 'learningId is required',
    }),
    lastSeenVideoId: string({
      required_error: 'lastSeenVideoId is required',
    }),
  }),
});

export const updateLastSeenTimeStampSchema = object({
  body: object({
    learningId: string({
      required_error: 'learningId is required',
    }),
    lastSeenVideoTimestamp: number({
      required_error: 'lastSeenVideoTimestamp is required',
    }),
  }),
});

export type UpdateLearningInput = TypeOf<typeof updateLearningSchema>['body'];

export type UpdateLastSeenTimeStampInput = TypeOf<
  typeof updateLastSeenTimeStampSchema
>['body'];

export type GetLearningQuery = TypeOf<typeof getLearningSchema>['query'];

export type DeleteLearningQuery = TypeOf<
  typeof deleteLearningByIdSchema
>['query'];

export type GetLearningByIdQuery = TypeOf<
  typeof getLearningByIdSchema
>['query'];

export type CreateLearningInput = TypeOf<typeof createLearningSchema>['body'];
