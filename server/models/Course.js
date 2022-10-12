import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: [true, 'courseName cannot be empty'] },
  courseCode: { type: String, required: [true, 'courseCode cannot be empty'] },
  branch: {type: String, required: [true, 'branch cannot be empty'] },
  credit: {type: String, required: [type, 'credit cannot be empty'] },
  thumbnail: {type: String, required: [type, 'thumbnail cannot be empty']}
},
  {
    timestamps: true
  }
)

const Course = mongoose.model('Course', courseSchema);
export default Course;