import React from 'react'
import "./StudyMaterialCard.css";
import ImgLink from "./link.png"
import ImgPdf from "./pdf.png"
import ImgVideo from "./video.png"
import IcoCardOpen from "./card-open-ico.png"

function StudyMaterialCard({title,description,contentType,url}) {

  function viewStudyMaterial()
  {
    window.open(url, '_blank').focus();
  }

  const ContentTypeImageMap = {
    "link": ImgLink,
    "pdf": ImgPdf,
    "video": ImgVideo
  }

  return (
    <div className='study-material-card'>
      <h6 className="study-material-card-title text-center">{title}</h6>
      <p className='study-material-card-description text-center'>{description}</p>
      <img src={ContentTypeImageMap[contentType]}
        className="study-material-card-header-img" />
      <img src={IcoCardOpen} onClick={viewStudyMaterial}
        className="study-material-card-open-ico " />
    </div>
  )
}

export default StudyMaterialCard
