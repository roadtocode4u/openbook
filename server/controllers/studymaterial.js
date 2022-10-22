import StudyMatrial from '../models/StudyMaterial.js';
import Course from '../models/Course.js';

export const studyMaterialPost = async (req, res) => {
    const { title, description, url, contenttype, courseCode } = req.body;

    const course = await Course.findOne({ courseCode });
    if (!course) {
        return res.json({ status: false, data: {}, message: 'Course not found' });
    }

    const newStudyMaterial = new StudyMatrial({
        title,
        description,
        url,
        contenttype,
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
    
    const studymaterials = await StudyMatrial.find({
        courseCode: courseCode
    });
    res.json({
        success: true,
        data: studymaterials
    })
}