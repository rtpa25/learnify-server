import { Request, Response } from 'express';
import {
  CreateLearningInput,
  GetLearningByIdQuery,
  GetLearningQuery,
  UpdateLearningInput,
} from '../schemas/learning.schema';
import {
  createLearning,
  getLearningsByUserId,
  updateLearningById,
  getLearningById,
} from '../services/learning.service';

export async function createLearningHandler(
  req: Request<{}, {}, CreateLearningInput>,
  res: Response
) {
  const { thumbnail, channelId, channelTitle, name, user, playlistId } =
    req.body;
  const learning = await createLearning(
    thumbnail,
    name,
    channelTitle,
    channelId,
    user,
    playlistId
  );
  res.status(201).send(learning);
}

export async function getLearningsHandler(
  req: Request<{}, {}, {}, GetLearningQuery>,
  res: Response
) {
  const { userId } = req.query;
  const learnings = await getLearningsByUserId(userId);
  res.status(200).send(learnings);
}

export async function updateLearningHandler(
  req: Request<{}, {}, UpdateLearningInput>,
  res: Response
) {
  const { learningId, lastSeenVideoId } = req.body;
  const learning = await updateLearningById(learningId, lastSeenVideoId);
  res.status(200).send(learning);
}

export async function getLearningByIdHandler(
  req: Request<{}, {}, {}, GetLearningByIdQuery>,
  res: Response
) {
  const { learningId } = req.query;
  const learning = await getLearningById(learningId);
  res.status(200).send(learning);
}
