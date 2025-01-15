import { Request, Response } from 'express';
import Post from '../models/post.model';
import { User } from '../models/user.model';
import ImageKit from 'imagekit';

export const uploadAuth = async (req: Request, res: Response) => {
  const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT as string,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY as string,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string
  });
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};

export const getPosts = async (req: Request, res: Response) => {
  const pageNumber = parseInt(req.query.page as string) || 1;
  const limitNumber = parseInt(req.query.limit as string) || 2;

  const posts = await Post.find()
    .populate('user', 'username')
    .limit(limitNumber)
    .skip((pageNumber - 1) * limitNumber);

  const totalPosts = await Post.countDocuments();
  const hasMorePosts = pageNumber * limitNumber < totalPosts;

  res.status(200).json({ posts, hasMorePosts });
};

export const getPost = async (req: Request, res: Response) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate('user', 'username image');
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
