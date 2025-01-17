import { Router } from 'express';
import { savedPosts, savePost } from '../controllers/user.controller';

export const userRouter: Router = Router();
userRouter.get('/saved', savedPosts);
userRouter.patch('/save', savePost);
