import { NextFunction, Request, Response } from 'express';
import Post from '../models/post.model';

export const increaseVisitCount = async (req: Request, res: Response, next: NextFunction) => {
  const slug = req.params.slug;

  await Post.findOneAndUpdate({ slug }, { $inc: { visit: 1 } });

  next();
};
