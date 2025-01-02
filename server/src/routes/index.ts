import { Router } from 'express';
import { commentRouter } from './comment.route';
import { postRouter } from './post.route';

export const routes: Router = Router();
routes.use('/posts', postRouter);
routes.use('/comments', commentRouter);
