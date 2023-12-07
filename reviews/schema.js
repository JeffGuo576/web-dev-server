import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
  _id: Number,
  movie_id: String,
  user: String,
  rating: Number,
  comment: String,
  },
  { collection: "reviews" });
  
export default reviewSchema;