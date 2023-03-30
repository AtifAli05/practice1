const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter user name"],
    },
    email: {
      type: String,
      required: [true, "please Enter your Email"],
      unique: [true, "this email is already used"],
    },
    password: {
      type: String,
      required:true
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
