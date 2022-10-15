import React from 'react'

import "./StudyMaterialCard.css";
import ImgLink from "./link.png"
import ImgPdf from "./pdf.png"
import ImgVideo from "./video.png"

const ContentTypeImageMap = {
  "link": ImgLink,
  "pdf": ImgPdf,
  "video": ImgVideo
}

function StudyMaterialCard(props) {
  const { title, description, url, contenttype } = props.material;

  return (
    <div className='study-material-card'>
      <img src={ContentTypeImageMap[contenttype]}
        alt={title}
        className="study-material-card-header-img" />
      <h6 className="study-material-card-title text-center">{title}</h6>
      <p className='study-material-card-description'>{description}</p>
    </div>
  )
}

export default StudyMaterialCard
