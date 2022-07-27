import { NoteModel } from '../models/note.model';

export async function createNote(
  userId: string,
  learningId: string,
  text: string,
  videoId: string,
  timeStamp: number
) {
  const note = await NoteModel.create({
    text,
    videoId,
    user: userId,
    learning: learningId,
    timeStamp,
  });
  return note;
}

export async function updateNote(noteId: string, text: string) {
  const note = await NoteModel.findByIdAndUpdate(noteId, { text });
  return note;
}

export async function deleteNote(noteId: string) {
  const deletedNote = await NoteModel.findByIdAndDelete(noteId);
  return deletedNote;
}

export async function getNotes(
  userId: string,
  learningId: string,
  videoId: string
) {
  const notes = await NoteModel.find({
    user: userId,
    learning: learningId,
    videoId,
  }).sort({ timeStamp: 'descending' });

  return notes;
}
