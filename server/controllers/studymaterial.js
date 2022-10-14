import StudyMatrial from '../models/StudyMaterial.js';
import Course from '../models/Course.js';

export const studyMaterialPost = async (req, res) => {
    const { title, description, url, contenttype, course } = req.body;

    const newStudyMaterial = new StudyMatrial({
        title,
        description,
        url,
        contenttype,
        Course: Course,
    });

    const savedStudyMaterial = await newStudyMaterial.save();
    res.json({
        status: true,
        data: savedStudyMaterial,
        message: "Study Material Added Successfully",
    });

}