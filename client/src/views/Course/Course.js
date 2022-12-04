import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import "./Course.css";
import StudyMaterialCard from '../../components/StudyMaterialCard/StudyMaterialCard';

function Course() {
  const [searchParams] = useSearchParams();
  const courseCode = searchParams.get("courseCode");

  const [studymaterial, setStudyMaterial] = useState([]);
  
  const [studyMaterialTheory, setStudyMaterialTheory] = useState([]);
  const [studyMaterialPractical, setStudyMaterialPractical] = useState([]);

  useEffect(() => {
    const theoryMaterials = studymaterial.filter((material) =>{ return material.isTheory })
    const practicalMaterials = studymaterial.filter((material) =>{ return !material.isTheory })

    setStudyMaterialTheory(theoryMaterials);
    setStudyMaterialPractical(practicalMaterials);
  }, [studymaterial]);

  const [course, setCourse] = useState({});

  useEffect(() => {
    async function fetchStudyMaterialData() {
      const response = await axios.get(`/studymaterial?courseCode=${courseCode}`);
      if (response) {
        setStudyMaterial(response.data.data)
      }
    }
    fetchStudyMaterialData();

    async function fetchCourseData() {
      const response = await axios.get(`/course?courseCode=${courseCode}`);
      if (response) {
        setCourse(response.data.data)
      }
    }
    fetchCourseData();
  }, []);

  return (
    <div>
      <div className='container'>
        <div className='row course-header'>
          <div className='col-md-4 '><img className='image-logo' src={course?.thumbnail} /></div>
          <div className='col-md-8 text-center'>
            <h3>{course?.title}</h3>
            <h4>{courseCode}</h4>
            <h4><i class="fa-solid fa-credit-card"></i> {course?.credits}</h4>
          </div>
        </div>
      </div>

      <div className='course-material-container mt-4'>
        <div className='row'>
          <div className='col-md-6 text-center'>
            <h4 className='mt-3 mb-4'>Theory</h4>
            {
              studyMaterialTheory?.map((material, index) => {
                  return (
                    <StudyMaterialCard
                      title={material.title}
                      description={material.description}
                      contentType={material.contentType} />
                  )
              })
            }
          </div>
          <div className='col-md-6 text-center'>
            <h4 className='mt-3 mb-4'>Practical</h4>
            {
              studyMaterialPractical?.map((material, index) => {
                  return (
                    <StudyMaterialCard
                      title={material.title}
                      description={material.description}
                      contentType={material.contentType} />
                  )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
