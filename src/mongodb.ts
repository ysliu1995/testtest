import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/test')
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;