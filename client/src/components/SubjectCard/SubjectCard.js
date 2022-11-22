import React from 'react'
import './SubjectCard.css'
import IcoCardOpen from './card-open-ico.png';

function SubjectCard({subject}) {
  return (
    <>
    <div className='subject-card'>
          <h5>{subject}</h5>
          <img src={IcoCardOpen}
        className="study-material-card-open-ico " />
    </div>
    </>
  )
}

export default SubjectCard