import React from 'react'
import "./StudyMaterialCard.css";
import ImgLink from "./link.png"
import ImgPdf from "./pdf.png"
import ImgVideo from "./video.png"

function StudyMaterialCard(props) {

  const ContentTypeImageMap = {
    "link": ImgLink,
    "pdf": ImgPdf,
    "video": ImgVideo
  }

  return (
    <div className='study-material-card'>
      <img src={ContentTypeImageMap[props.contenttype]}
        className="study-material-card-header-img" />
      <h6 className="study-material-card-title text-center">{props.title}</h6>
      <p className='study-material-card-description'>{props.description}</p>
    </div>
  )
}

export default StudyMaterialCard
