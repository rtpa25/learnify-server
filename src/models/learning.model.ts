import { Document, Schema, model } from 'mongoose';
import { UserDocument } from './user.model';

export interface LearningDocument extends Document {
  thumbnail: string;
  name: string;
  channelTitle: string;
  channelId: string;
  user: UserDocument['_id'];
  playlistId: string;
}

const learningSchema = new Schema(
  {
    thumbnail: { type: String, required: true },
    name: { type: String, required: true },
    channelTitle: { type: String, required: true },
    channelId: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    playlistId: { type: String, required: true },
  },
  { timestamps: true }
);

export const LearningModel = model<LearningDocument>(
  'Learning',
  learningSchema
);
