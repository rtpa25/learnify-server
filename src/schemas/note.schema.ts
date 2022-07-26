import { number, object, string, TypeOf } from 'zod';

export const createNoteSchema = object({
  body: object({
    userId: string({
      required_error: 'userId is required',
    }),
    learningId: string({
      required_error: 'learningId is required',
    }),
    text: string({
      required_error: 'text is required',
    }),
    videoId: string({
      required_error: 'videoId is required',
    }),
    timeStamp: number({
      required_error: 'timeStamp is required',
    }),
  }),
});

export const updateNoteSchema = object({
  body: object({
    noteId: string({
      required_error: 'noteId is required',
    }),
    text: string({
      required_error: 'text is required',
    }),
  }),
});

export const deleteNoteSchema = object({
  query: object({
    noteId: string({
      required_error: 'noteId is required',
    }),
  }),
});

export const getUserNotesSchema = object({
  query: object({
    userId: string({
      required_error: 'userId is required',
    }),
    learningId: string({
      required_error: 'learningId is required',
    }),
    videoId: string({
      required_error: 'videoId is required',
    }),
  }),
});

export type CreateNoteInput = TypeOf<typeof createNoteSchema>['body'];

export type UpdateNoteInput = TypeOf<typeof updateNoteSchema>['body'];

export type DeleteNoteQuery = TypeOf<typeof deleteNoteSchema>['query'];

export type GetUserNotesQuery = TypeOf<typeof getUserNotesSchema>['query'];
