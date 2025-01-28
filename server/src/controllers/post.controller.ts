import { Request, Response } from 'express';
import Post from '../models/post.model';
import { User } from '../models/user.model';
import ImageKit from 'imagekit';
import { INewPost, IPost, IUser, QueryParams } from '../utils/interfaces';

export const getPosts = async (req: Request, res: Response) => {
  const pageNumber = parseInt(req.query.page as string) || 1;
  const limitNumber = parseInt(req.query.limit as string) || 10;

  const query: QueryParams = {};

  const category = req.query.category as string;
  const author = req.query.author as string;
  const searchQuery = req.query.search as string;
  const sortQuery = req.query.sort as string;
  const featured = req.query.featured as string;

  if (category) {
    query.category = category;
  }

  if (searchQuery) {
    query.title = { $regex: searchQuery, $options: 'i' };
  }

  if (author) {
    const user = await User.findOne({ username: author }).select('_id');

    if (!user) {
      res.status(404).json('Post not found');
      return;
    }

    query.user = user._id as string;
  }

  let sortObj: { [key: string]: 1 | -1 } = { createdAt: -1 };
  if (sortQuery) {
    switch (sortQuery) {
      case 'newest':
        sortObj = { createdAt: -1 };
        break;
      case 'oldest':
        sortObj = { createdAt: 1 };
        break;
      case 'popular':
        sortObj = { visit: -1 };
        break;
      case 'trending':
        sortObj = { visit: -1 };
        query.createdAt = {
          $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
        };
        break;
      default:
        break;
    }
  }

  if (featured) {
    query.isFeatured = true;
  }

  const posts = await Post.find<IPost>(query)
    .populate('user', 'username')
    .sort(sortObj)
    .limit(limitNumber)
    .skip((pageNumber - 1) * limitNumber);

  const totalPosts = await Post.countDocuments(query);
  const hasMorePosts = pageNumber * limitNumber < totalPosts;

  res.status(200).json({ posts, hasMorePosts });
};

export const getPost = async (req: Request, res: Response) => {
  const post = await Post.findOne<IPost>({ slug: req.params.slug }).populate('user', 'username image');
  res.status(200).json(post);
};

export const createPost = async (req: Request, res: Response) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    res.status(401).json('User not authenticated');
    return;
  }

  const user = await User.findOne<IUser>({ clerkUserId });
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

  while (await Post.findOne<IPost>({ slug })) {
    slug = `${slug}-${counter}`;
    counter++;
  }

  const newPost = new Post<INewPost>({ user: user._id, slug, ...req.body });
  const savedPost = await newPost.save();
  res.status(200).json(savedPost);
};

export const deletePost = async (req: Request, res: Response) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    res.status(401).json('User not authenticated');
    return;
  }

  const role = req.auth.sessionClaims?.metadata?.role || 'user';
  if (role === 'admin') {
    await Post.findByIdAndDelete<IPost>(req.params.id);
    res.status(200).json('Post deleted sucessfully');
    return;
  }

  const user = await User.findOne<IUser>({ clerkUserId });
  if (!user) {
    res.status(404).json('User not found');
    return;
  }

  const deletedPost = await Post.findOneAndDelete<IPost>({ _id: req.params.id, user: user._id });

  if (!deletedPost) {
    res.status(403).json('Users are only permitted to delete their own posts');
    return;
  }
  res.status(200).json('Post deleted sucessfully');
};

export const featurePost = async (req: Request, res: Response) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    res.status(401).json('User not authenticated');
    return;
  }

  const role = req.auth.sessionClaims?.metadata?.role || 'user';
  if (role !== 'admin') {
    res.status(403).json('Admins are only permitted to feature posts');
    return;
  }

  const postId = req.body.postId;
  const post = await Post.findById(postId);
  if (!post) {
    res.status(404).json('Post not found');
    return;
  }

  const isFeatured = post.isFeatured;
  const updatedPost = await Post.findByIdAndUpdate(postId, { isFeatured: !isFeatured }, { new: true });

  res.status(200).json(updatedPost);
};

export const uploadAuth = async (req: Request, res: Response) => {
  const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT as string,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY as string,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string
  });
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
