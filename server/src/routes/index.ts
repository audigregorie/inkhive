import { Router } from 'express';
import { commentRouter } from './comment.route';
import { postRouter } from './post.route';
import { webhookRouter } from './webhook.route';

export const routes: Router = Router();
routes.use('/webhooks', webhookRouter);
routes.use('/posts', postRouter);
routes.use('/comments', commentRouter);
