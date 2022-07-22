import { Request, Response } from 'express';
import { getUserBySupertokensId } from '../services/user.service';

export async function getUserHandlerFromSuperTokensId(
  req: Request,
  res: Response
) {
  const { supertokensId } = req.query;
  if (!supertokensId) {
    return res.status(400).send('Missing supertokensId');
  }
  const user = await getUserBySupertokensId(supertokensId as string);

  if (!user) {
    return res.status(404).send('User not found');
  }
  return res.json(user).status(200);
}
