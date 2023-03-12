import Course from '../models/Course.js';
import responder from '../util/responder.js';

export const coursePost = async (req, res) => {
    const { title, courseCode, branch, sem, credits, thumbnail } = req.body

    const newCourse = new Course({
        title,
        courseCode,
        branch,
        sem,
        credits,
        thumbnail
    })

    const savedCourse = await newCourse.save();
    responder(res, savedCourse, "New Course is added successfully");
}

export const courseGet = async (req, res) => {
    const { courseCode } = req.query;

    const course = await Course.findOne({
        courseCode: courseCode
    });
    responder(res, course, "course featch successfully!!");
}

export const searchCoursesGet = async (req, res) => {
    const { branch, sem } = req.query;

    const courses = await Course.find({
        branch,
        sem
    });
    responder(res, courses, "course featch successfully!!");
}


