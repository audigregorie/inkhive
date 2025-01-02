import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI as string);
    console.log('MongoDB connected successfully ✅');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};
