import React from 'react'
import "./StudyMaterialCard.css";
import ImgLink from "./link.png"
import ImgPdf from "./pdf.png"
import ImgVideo from "./video.png"
import IcoCardOpen from "./card-open-ico.png"
import { Link } from 'react-router-dom'

function StudyMaterialCard({ title, description, contentType, url }) {

  const ContentTypeImageMap = {
    "link": ImgLink,
    "pdf": ImgPdf,
    "video": ImgVideo
  }

  var openingType = "";

  if (contentType === "link") {
    openingType = url;
  }

  else if (contentType === "pdf") {
    openingType = url;
  }

  else if (contentType === "video") {
    openingType = `/show-material/${url}`
  }

  return (
    <div className='study-material-card'>
      <h6 className="study-material-card-title text-center">{title}</h6>
      <p className='study-material-card-description text-center'>{description}</p>
      <img src={ContentTypeImageMap[contentType]}
        className="study-material-card-header-img" />

      <div>
        {
          contentType === "video" ?
            (
              <Link to={openingType}>
                <img src={IcoCardOpen} className="study-material-card-open-ico " />
              </Link>
            ) : (
              <a href={openingType} target="_blank">
                <img src={IcoCardOpen} className="study-material-card-open-ico " />
              </a>
            )
        }
      </div>
    </div>
  )
}

export default StudyMaterialCard
