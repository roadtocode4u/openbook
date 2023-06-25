import StudyMatrial from '../models/StudyMaterial.js';
import Course from '../models/Course.js';
import responder from '../util/responder.js';
import { createCache, getCache } from './.././util/cache.js'

export const studyMaterialPost = async (req, res) => {
  const { title, description, url, contentType, courseCode, isTheory } = req.body;

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

// export const studyMaterialGet = async (req, res) => {
//     const { courseCode } = req.query;
//     const course = await Course.find({
//         courseCode: courseCode
//     })

//     // console.log(course);

//     const studymaterials = await StudyMatrial.find({
//         course: course
//     });

//     // console.log(studymaterials);
//     responder(res, studymaterials, "Study material fetch successfully!!");
// }

export const studyMaterialGet = async (req, res) => {
  const { courseCode } = req.query;

  try {
    const course = await Course.findOne({ courseCode });

    if (!course) {
      return responder(res, null, "Course not found");
    }

    const studyMaterialFromRedis = await getCache('studymaterials');

    let studyMaterial;

    if (studyMaterialFromRedis) {
      studyMaterial = studyMaterialFromRedis;
      console.log('from redis')
    } else {
      studyMaterial = await StudyMatrial.find({ course });
      await createCache('studymaterials', studyMaterial);
      console.log('from MongoDB')
    }

    responder(res, studyMaterial, "Study material fetched successfully!");
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    responder(res, null, "An error occurred while fetching study material");
  }
};
