import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: [true, 'fullName cannot be empty'] },
  email: { type: String, required: [true, 'email cannot be empty'] },
  password: { type: String, required: [true, 'password cannot be empty'] },
  mobile: { type: String, required: [true, 'mobile cannot be empty'] }
},
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema);
export default User;