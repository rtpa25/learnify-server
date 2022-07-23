import express from 'express';
import { getUserHandlerFromSuperTokensId } from '../controllers/user.controller';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';

const router = express.Router();

router.get('/me', verifySession(), getUserHandlerFromSuperTokensId);

export default router;
