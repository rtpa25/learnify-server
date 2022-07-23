import { Request, Response } from 'express';
import {
  CreateLearningInput,
  GetLearningQuery,
} from '../schemas/learning.schema';
import {
  createLearning,
  getLearningsByUserId,
} from '../services/learning.service';

export async function createLearningHandler(
  req: Request<{}, {}, CreateLearningInput>,
  res: Response
) {
  const { thumbnail, channelId, channelTitle, name, user } = req.body;
  const learning = await createLearning(
    thumbnail,
    name,
    channelTitle,
    channelId,
    user
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
