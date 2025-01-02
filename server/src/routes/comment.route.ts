import { Router } from 'express';
import { getComments } from '../controllers/comment.controller';

export const commentRouter: Router = Router();
commentRouter.get('/', getComments);
