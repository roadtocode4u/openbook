import Course from '../models/Course.js';

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
    res.json({
        success: true,
        data: savedCourse,
        message: "New Course is added successfully",
    });
}

export const courseGet = async (req, res) => {
    const { courseCode } = req.query;

    const course = await Course.findOne({
        courseCode: courseCode
    });
    res.json({
        success: true,
        data: course
    })
}

export const searchCoursesGet = async (req, res) => {
    const { branch, sem } = req.query;

    const courses = await Course.find({
        branch,
        sem
    });
    res.json({
        success: true,
        data: courses
    })
}


