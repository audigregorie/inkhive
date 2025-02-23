// import { Auth } from '@clerk/types';

declare global {
  namespace Express {
    interface Request {
      auth: any;
    }
  }
}

export interface WebhookEvent {
  type: string;
  data: {
    id: string;
    username?: string;
    email_addresses: { email_address: string }[];
    profile_img_url?: string;
  };
}

export interface IUser {
  _id: string;
  clerkUserId: string;
  username: string;
  email: string;
  image?: string;
  savedPosts: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IComment {
  _id: string;
  user: IUser;
  post: IPost;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPost {
  _id: string;
  user: IUser;
  image?: string;
  title: string;
  slug: string;
  description?: string;
  category?: string;
  content: string;
  isFeatured?: boolean;
  visit?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface INewComment {
  description: string;
  user: { _id: string };
  postId: string;
}

export interface INewPost {
  user: { _id: string };
  slug: string;
  image?: string;
  title: string;
  category?: string;
  descripition?: string;
  content: string;
}

export interface QueryParams {
  category?: string;
  title?: { $regex: string; $options: string };
  user?: string;
  createdAt?: { $gte: Date };
  isFeatured?: boolean;
}
