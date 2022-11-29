import React from 'react'
import './SubjectCard.css'
import IcoCardOpen from './card-open-ico.png';
import { Link } from 'react-router-dom';

function SubjectCard({ title, subjectCode }) {
  return (
    <>
      <div className='subject-card'>
        <h5>{title}</h5>
        <h6>{subjectCode}</h6>
        <Link to={`/course-view?courseCode=${subjectCode}`}>
          <img src={IcoCardOpen}
            className="study-material-card-open-ico " />
        </Link>
      </div>
    </>
  )
}

export default SubjectCard
