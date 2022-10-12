import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: [true, 'courseName cannot be empty'] },
  courseCode: { type: String, required: [true, 'courseCode cannot be empty'] }
},
  {
    timestamps: true
  }
)

const Course = mongoose.model('Course', courseSchema);
export default Course;