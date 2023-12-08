import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
 {
  name: { type: String, required: true },
  id: Number,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  followers: { type: [Number], default: [] },
  following: { type: [Number], default: [] },
  bio: { type: String, default: "" },
  profilePicture: { type: String, default: "" },
  userType: { type: String, enum: ["DIRECTOR", "TYPICAL USER"] },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, default: "" },
  address: { type: String, default: "" },
  bookmarks: { type: [Number], default: [] },
 },
 { collection: "users" }
);

export default userSchema;
