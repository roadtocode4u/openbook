import StudyMatrial from '../models/StudyMaterial.js';
import Course from '../models/Course.js';

export const studyMaterialPost = async (req, res) => {
    const { title, description, url, contentType, courseCode } = req.body;

    const course = await Course.findOne({ courseCode });
    if (!course) {
        return res.json({ status: false, data: {}, message: 'Course not found' });
    }

    const newStudyMaterial = new StudyMatrial({
        title,
        description,
        url,
        contentType,
        course: course._id
    });

    const savedStudyMaterial = await newStudyMaterial.save();
    res.json({
        status: true,
        data: savedStudyMaterial,
        message: "Study Material Added Successfully",
    });

}

export const studyMaterialGet = async (req, res) => {
    const { courseCode } = req.query;
    const course = await Course.find({
        courseCode: courseCode
    })

    // console.log(course);

    const studymaterials = await StudyMatrial.find({
        course: course
    });
     
    // console.log(studymaterials);

    res.json({
        success: true,
        data: studymaterials
    })
}