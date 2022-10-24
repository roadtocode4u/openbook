import React from 'react'
import "./StudyMaterialCard.css";
import ImgLink from "./link.png"
import ImgPdf from "./pdf.png"
import ImgVideo from "./video.png"
import IcoCardOpen from "./card-open-ico.png"

function StudyMaterialCard(props) {

  const ContentTypeImageMap = {
    "link": ImgLink,
    "pdf": ImgPdf,
    "video": ImgVideo
  }

  return (
    <div className='study-material-card'>
      <h6 className="study-material-card-title text-center">{props.title}</h6>
      <p className='study-material-card-description text-center'>{props.description}</p>
      <img src={ContentTypeImageMap[props.contenttype]}
        className="study-material-card-header-img" />
      <img src={IcoCardOpen}
        className="study-material-card-open-ico " />
    </div>
  )
}

export default StudyMaterialCard
