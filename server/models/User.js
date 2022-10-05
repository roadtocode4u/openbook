import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: { type: String },
    email: { type: String },
    mobile: { type: String }
  })
  
  module.exports = mongoose.model('User', userSchema)