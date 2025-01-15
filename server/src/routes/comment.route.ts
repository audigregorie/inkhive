import { Router } from 'express';
import { addComment, deleteComment, getPostComments } from '../controllers/comment.controller';

export const commentRouter: Router = Router();
commentRouter.get('/:postId', getPostComments);
commentRouter.post('/:postId', addComment);
commentRouter.delete('/:id', deleteComment);
