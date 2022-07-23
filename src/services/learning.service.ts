import { LearningModel } from '../models/learning.model';

export async function createLearning(
  thumbnail: string,
  name: string,
  channelTitle: string,
  channelId: string,
  userId: string
) {
  const learning = await LearningModel.create({
    thumbnail,
    name,
    channelId,
    channelTitle,
    user: userId,
  });
  return learning;
}

export async function getLearningsByUserId(userId: string) {
  const learnings = await LearningModel.find({ user: userId });
  return learnings;
}
