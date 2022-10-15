import React from 'react'
import { useSearchParams } from 'react-router-dom'

import "./Course.css";
import StudyMaterialCard from '../../components/StudyMaterialCard/StudyMaterialCard';

function Course() {
  const [searchParams] = useSearchParams();
  const courseCode = searchParams.get("courseCode");

  {/* TODO: @pinki change this variable to useState variable and this data should come from getcourse api call */}
  const studyMaterials = [
    {
      "title": "Study Material 1",
      "description": "This is first clss",
      "url": "12345",
      "contenttype": "video"
    },
    {
      "title": "Study Material 2",
      "description": "This is first clss",
      "url": "12345",
      "contenttype": "link"
    },
    {
      "title": "Study Material 3",
      "description": "This is first clss",
      "url": "12345",
      "contenttype": "pdf"
    },
    {
      "title": "Study Material 4",
      "description": "This is first clss",
      "url": "12345",
      "contenttype": "video"
    },
    {
      "title": "Study Material 5",
      "description": "This is first clss",
      "url": "12345",
      "contenttype": "pdf"
    }
  ];

  return (
    <div>
      {/* TODO: @pinki complete this card */}
      <div className='course-header'>
        <h1>{courseCode}</h1>
      </div>
      <div className='course-material-container'>
        <div className='row'>
          {
            studyMaterials?.map((material, index) => {
              return (
                <div className='col-md-4 col-lg-3 d-flex justify-content-center' key={index}>
                  <StudyMaterialCard material={material} />
                </div>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Course
