import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { IUser } from '../utils/interfaces';

export const savedPosts = async (req: Request, res: Response) => {
  const clerkUserId = req.auth?.userId;
  if (!clerkUserId) {
    res.status(401).json('Not authenticated');
    return;
  }

  const user = await User.findOne<IUser>({ clerkUserId });
  if (!user) {
    res.status(404).json('User not found');
    return;
  }

  res.status(200).json(user.savedPosts);
};

export const savePost = async (req: Request, res: Response) => {
  const clerkUserId = req.auth?.userId;
  const postId = req.body.postId;

  if (!clerkUserId) {
    res.status(401).json('Not authenticated');
    return;
  }

  const user = await User.findOne<IUser>({ clerkUserId });
  if (!user) {
    res.status(404).json('User not found');
    return;
  }

  const isSaved = user.savedPosts.some((savedPost: string) => savedPost === postId);

  !isSaved
    ? await User.findByIdAndUpdate(user._id, { $push: { savedPosts: postId } })
    : await User.findByIdAndUpdate(user._id, { $pull: { savedPosts: postId } });

  // testing
  setTimeout(() => {
    res.status(200).json(isSaved ? 'Post unsaved' : 'Post saved');
  }, 3000);
};
