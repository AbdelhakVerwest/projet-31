const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  isVerified: { type: Boolean, default: false }, 
  passwordResetToken: String,
  passwordResetExpires: Date
});
module.exports = User = mongoose.model("users", UserSchema);
