import { Document, Schema, model } from 'mongoose';
import { LearningDocument } from './learning.model';
import { UserDocument } from './user.model';

export interface NoteDocument extends Document {
  text: string; //can store markdown or plain text here
  videoId: string;
  user: UserDocument['_id'];
  learning: LearningDocument['_id'];
  timeStamp: number;
}

const noteSchema = new Schema(
  {
    text: { type: String, required: true },
    videoId: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    learning: { type: Schema.Types.ObjectId, ref: 'Learning', required: true },
    timeStamp: { type: Number, required: true },
  },
  { timestamps: true }
);

export const NoteModel = model<NoteDocument>('Note', noteSchema);
