import { Router } from 'express';
import { createPost, deletePost, featurePost, getPost, getPosts, uploadAuth } from '../controllers/post.controller';
import { increaseVisitCount } from '../middlewares/increaseVisit';

export const postRouter = Router();
postRouter.get('/upload-auth', uploadAuth);

postRouter.get('/', getPosts);
postRouter.get('/:slug', increaseVisitCount, getPost);
postRouter.post('/', createPost);
postRouter.delete('/:id', deletePost);
postRouter.patch('/featured', featurePost);
