import { Document, Schema, model } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  supertokensId: string;
  createdAt: Date;
  updatedAt: Date;
  thirdParty?: ThirdPartyInfo;
}

export interface ThirdPartyInfo {
  id: string;
  userId: string;
}

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    supertokensId: { type: String, required: true, unique: true },
    thirdParty: {
      id: { type: String, required: false },
      userId: { type: String, required: false },
      required: false,
    },
  },
  { timestamps: true }
);

export const UserModel = model<UserDocument>('User', userSchema);
