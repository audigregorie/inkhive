import mongoose, { Schema } from 'mongoose';

const CommentSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

export const Comment = mongoose.model('Comment', CommentSchema);
