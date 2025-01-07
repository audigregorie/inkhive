import { Request, Response } from 'express';
import Post from '../models/post.model';
import { User } from '../models/user.model';

export const getPosts = async (req: Request, res: Response) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

export const createPost = async (req: Request, res: Response) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    res.status(401).json('User not authenticated');
    return;
  }

  const user = await User.findOne({ clerkUserId });
  if (!user) {
    res.status(404).json('User not found');
    return;
  }

  let slug = req.body.title
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
  let counter = 2;

  while (await Post.findOne({ slug })) {
    slug = `${slug}-${counter}`;
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });
  const savedPost = await newPost.save();
  res.status(200).json(savedPost);
};

export const deletePost = async (req: Request, res: Response) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    res.status(401).json('User not authenticated');
    return;
  }

  const user = await User.findOne({ clerkUserId });
  if (!user) {
    res.status(404).json('User not found');
    return;
  }

  const deletedPost = await Post.findOneAndDelete({ _id: req.params.id, user: user._id });

  if (!deletedPost) {
    res.status(403).json('Users are only permitted to delete their own posts');
  }
  res.status(200).json('Post deleted sucessfully');
};
