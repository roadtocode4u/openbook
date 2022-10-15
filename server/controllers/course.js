import Course from '../models/Course.js';

export const coursePost = async (req, res) => {
    const { title, courseCode, branch, credits, thumbnail} = req.body

    const newCourse =  new Course({
        title,
        courseCode,
        branch,
        credits,
        thumbnail
    })

    const savedCourse = await newCourse.save() ;
    res.json({
        success: true,
        data: savedCourse,
        message: "New Course is added successfully",
    });
}
