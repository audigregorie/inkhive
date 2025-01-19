import { ReactNode } from 'react';

export interface ImageProps {
  path: string;
  alt: string;
  imageWidth?: string;
  imageHeight?: string;
  className: string;
}

export interface UploadMediaProps {
  children: ReactNode;
  setProgress: (progress: number) => void;
  setData: (data: ImageKitMediaResponse) => void;
  setOnErrorSpan: (errorSpan: ReactNode | null) => void;
  type: 'image' | 'video';
}

export interface ImageKitMediaResponse {
  filePath: string;
  url: string;
}

export interface BaseDBData {
  _id: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}

export interface PostData extends BaseDBData, NewPost {
  slug: string;
  user: {
    _id: string;
    username: string;
    image?: string;
  };
  isFeatured: boolean;
  visit: number;
}

export interface NewPost {
  image?: string;
  title: string;
  category: string;
  description: string;
  content: string;
}

export interface PostListItemProps {
  post: PostData;
}

export interface CommentData extends BaseDBData {
  user: {
    _id: string;
    username: string;
    image?: string;
  };
  post: string;
  description: string;
}

export interface NewComment {
  description: string;
}

export interface CommentListItemProps {
  comment: CommentData;
  postId: string;
}
