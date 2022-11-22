import React from 'react'
import './SubjectCard.css'

function SubjectCard({subject}) {
  return (
    <>
    <div className='subject-card text-center'>
          <h1>{subject}</h1>
    </div>
    </>
  )
}

export default SubjectCard