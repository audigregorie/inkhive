import mongoose, { Schema } from 'mongoose';

const PostSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    category: { type: String, default: 'general' },
    content: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    visit: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);
export default Post;
