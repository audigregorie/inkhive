import { ReactNode } from 'react';

export type ImageProps = {
  path: string;
  alt: string;
  imageWidth?: string;
  imageHeight?: string;
  className: string;
};

export type ErrorSpanProps = {
  message: string;
};

export type UploadMediaProps = {
  children: ReactNode;
  setProgress: (progress: number) => void;
  setData: (data: ImageKitMediaResponse) => void;
  setOnErrorSpan: (errorSpan: ReactNode | null) => void;
  type: 'image' | 'video';
};

export type PostListItemProps = {
  post: PostData;
};

export type ImageKitMediaResponse = {
  filePath: string;
  url: string;
};

export type PostData = {
  image: string;
  title: string;
  category: string;
  description: string;
  content: string;
};
