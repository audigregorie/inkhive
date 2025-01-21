import { Router } from 'express';
import { createPost, deletePost, featurePost, getPost, getPosts, uploadAuth } from '../controllers/post.controller';

export const postRouter = Router();
postRouter.get('/upload-auth', uploadAuth);

postRouter.get('/', getPosts);
postRouter.get('/:slug', getPost);
postRouter.post('/', createPost);
postRouter.delete('/:id', deletePost);
postRouter.patch('/featured', featurePost);
