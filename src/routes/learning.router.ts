import express from 'express';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import {
  createLearningHandler,
  getLearningsHandler,
} from '../controllers/learning.controller';

const router = express.Router();

router.post('/', verifySession(), createLearningHandler);
router.get('/', verifySession(), getLearningsHandler);

export default router;
