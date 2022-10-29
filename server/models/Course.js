import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'title cannot be empty'] },
  courseCode: { type: String, required: [true, 'code cannot be empty'] },
  branch: { type: String, required: [true, 'branch cannot be empty'] },
  sem: {type: String, required: [true, 'semester cannot be empty']},
  credits: { type: String, required: [true, 'credits cannot be empty'] },
  thumbnail: { type: String, required: [true, 'thumbnail cannot be empty'] }
},
  {
    timestamps: true
  }
)

const Course = mongoose.model('Course', courseSchema);
export default Course;
