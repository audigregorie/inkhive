import { Request, Response } from 'express';
import { Comment } from '../models/comment.model';
import { User } from '../models/user.model';
import { IComment, INewComment, IUser } from '../utils/interfaces';

export const getPostComments = async (req: Request, res: Response) => {
  const comments = await Comment.find<IComment>({ post: req.params.postId }).populate('user', 'username image').sort({ createdAt: -1 });

  res.status(200).json(comments);
};

export const addComment = async (req: Request, res: Response) => {
  const clerkUserId = req.auth.userId;
  const postId = req.params.postId;

  if (!clerkUserId) {
    res.status(401).json('Not authenticated!');
    return;
  }

  const user = await User.findOne<IUser>({ clerkUserId });
  if (!user) {
    res.status(404).json('User not found');
    return;
  }

  const newComment = new Comment<INewComment>({
    ...req.body,
    user: user._id,
    post: postId
  });

  const savedComment = await newComment.save();

  res.status(201).json(savedComment);
};

export const deleteComment = async (req: Request, res: Response) => {
  const clerkUserId = req.auth.userId;
  const id = req.params.id;

  if (!clerkUserId) {
    res.status(401).json('Not authenticated!');
    return;
  }

  const user = await User.findOne<IUser>({ clerkUserId });
  if (!user) {
    res.status(404).json('User not found');
    return;
  }

  const deletedComment = await Comment.findOneAndDelete<IComment>({ _id: id, user: user._id });
  if (!deletedComment) {
    res.status(403).json('Users are only permitted to delete their own comments');
    return;
  }

  res.status(200).json('Comment deleted');
};
