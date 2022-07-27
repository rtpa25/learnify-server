import { LearningModel } from '../models/learning.model';

export async function createLearning(
  thumbnail: string,
  name: string,
  channelTitle: string,
  channelId: string,
  userId: string,
  playlistId: string
) {
  const learning = await LearningModel.create({
    thumbnail,
    name,
    channelId,
    channelTitle,
    user: userId,
    playlistId,
  });
  return learning;
}

export async function getLearningsByUserId(userId: string) {
  const learnings = await LearningModel.find({ user: userId });
  return learnings;
}

export async function updateLearningById(
  learningId: string,
  lastSeenVideoId: string
) {
  const learning = await LearningModel.findByIdAndUpdate(learningId, {
    lastSeenVideoId,
  });
  return learning;
}

export async function getLearningById(learningId: string) {
  const learning = await LearningModel.findById(learningId);
  return learning;
}

export async function updateLastSeenVideoTimestampById(
  learningId: string,
  lastSeenVideoTimestamp: number
) {
  const learning = await LearningModel.findByIdAndUpdate(learningId, {
    lastSeenVideoTimestamp,
  });
  return learning;
}

export async function deleteLearningById(learningId: string) {
  const deletedLearning = await LearningModel.findByIdAndDelete(learningId);
  return deletedLearning;
}
