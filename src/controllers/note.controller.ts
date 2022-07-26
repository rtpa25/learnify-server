import { Request, Response } from 'express';
import {
  CreateNoteInput,
  DeleteNoteQuery,
  GetUserNotesQuery,
  UpdateNoteInput,
} from '../schemas/note.schema';
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from '../services/note.service';

export async function createNoteHandler(
  req: Request<{}, {}, CreateNoteInput>,
  res: Response
) {
  const { userId, learningId, text, videoId, timeStamp } = req.body;
  const note = await createNote(userId, learningId, text, videoId, timeStamp);
  res.send(note).status(201);
}

export async function updateNoteHandler(
  req: Request<{}, {}, UpdateNoteInput>,
  res: Response
) {
  const { noteId, text } = req.body;
  const note = await updateNote(noteId, text);
  res.send(note).status(200);
}

export async function deleteNoteHandler(
  req: Request<{}, {}, {}, DeleteNoteQuery>,
  res: Response
) {
  const { noteId } = req.query;
  const deletedNote = await deleteNote(noteId);
  res.send(deletedNote).status(200);
}

export async function getUserNotesHandler(
  req: Request<{}, {}, {}, GetUserNotesQuery>,
  res: Response
) {
  const { learningId, userId, videoId } = req.query;
  const notes = await getNotes(userId, learningId, videoId);
  res.send(notes).status(200);
}
