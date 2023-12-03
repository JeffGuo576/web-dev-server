import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    role: {
      type: String,
      enum: ["DIRECTOR", "REVIEWER", "ADMIN"],
      default: "REVIEWER" },
  },
  { collection: "users" });
  
export default userSchema;