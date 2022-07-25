import express from 'express';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import {
  createLearningHandler,
  getLearningsHandler,
  updateLearningHandler,
  getLearningByIdHandler,
} from '../controllers/learning.controller';

const router = express.Router();

router.post('/', verifySession(), createLearningHandler);
router.get('/', verifySession(), getLearningsHandler);
router.patch('/', verifySession(), updateLearningHandler);
router.get('/individual', verifySession(), getLearningByIdHandler);

export default router;
