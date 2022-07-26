import express from 'express';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import {
  createNoteHandler,
  deleteNoteHandler,
  getUserNotesHandler,
  updateNoteHandler,
} from '../controllers/note.controller';

const router = express.Router();

router.post('/', verifySession(), createNoteHandler);
router.patch('/', verifySession(), updateNoteHandler);
router.delete('/', verifySession(), deleteNoteHandler);
router.get('/', verifySession(), getUserNotesHandler);

export default router;
