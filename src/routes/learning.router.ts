import express from 'express';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import {
  createLearningHandler,
  getLearningsHandler,
  updateLearningHandler,
  getLearningByIdHandler,
  updateLastSeenVideoTimestampHandler,
  deleteLearningHandler,
} from '../controllers/learning.controller';

const router = express.Router();

router.post('/', verifySession(), createLearningHandler);
router.get('/', verifySession(), getLearningsHandler);
router.patch('/', verifySession(), updateLearningHandler);
router.delete('/', verifySession(), deleteLearningHandler);
router.get('/individual', verifySession(), getLearningByIdHandler);
router.patch('/time', verifySession(), updateLastSeenVideoTimestampHandler);

export default router;
