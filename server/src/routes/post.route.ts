import { Router } from 'express';
import { createPost, deletePost, getPost, getPosts } from '../controllers/post.controller';

export const postRouter = Router();
postRouter.get('/', getPosts);
postRouter.get('/:slug', getPost);
postRouter.post('/', createPost);
postRouter.delete('/:id', deletePost);
