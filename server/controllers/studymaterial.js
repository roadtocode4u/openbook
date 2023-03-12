import StudyMatrial from '../models/StudyMaterial.js';
import Course from '../models/Course.js';
import responder from '../util/responder.js';

export const studyMaterialPost = async (req, res) => {
    const { title, description, url, contentType, courseCode, isTheory} = req.body;

    const course = await Course.findOne({ courseCode });
    if (!course) {
        return responder(res, null, 'Course not found', false);
    }

    const newStudyMaterial = new StudyMatrial({
        title,
        description,
        url,
        contentType,
        isTheory,
        course: course._id
    });

    const savedStudyMaterial = await newStudyMaterial.save();
    responder(res, savedStudyMaterial, "Study Material Added Successfully");
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
    responder(res, studymaterials, "Study material fetch successfully!!");
}