import express from 'express';
import { getUserHandlerFromSuperTokensId } from '../controllers/user.controller';

const router = express.Router();

router.get('/me', getUserHandlerFromSuperTokensId);

export default router;
