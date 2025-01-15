import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema(
  {
    clerkUserId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    savedPosts: { type: [String], default: [] }
  },
  { timestamps: true }
);

export const User = mongoose.model('User', UserSchema);
