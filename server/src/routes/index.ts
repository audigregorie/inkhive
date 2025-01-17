import { Router } from 'express';
import { commentRouter } from './comment.route';
import { postRouter } from './post.route';
import { userRouter } from './user.route';

export const routes: Router = Router();
routes.use('/posts', postRouter);
routes.use('/comments', commentRouter);
routes.use('/users', userRouter);
