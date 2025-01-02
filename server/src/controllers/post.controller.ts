import { Request, Response } from 'express';
import Post from '../models/post.model';

export const getPosts = async (req: Request, res: Response) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

export const createPost = async (req: Request, res: Response) => {
  const newPost = new Post(req.body);
  const savedPost = await newPost.save();
  res.status(200).json(savedPost);
};

export const deletePost = async (req: Request, res: Response) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.id);
  res.status(200).json('Post deleted sucessfully!');
};
