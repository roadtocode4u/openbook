import React from 'react'
import './ShowMaterial.css'
import { useParams } from 'react-router-dom';

function ShowMaterial() {
  const { url } = useParams();

  return (
    <>
      <div className='container'>
        <div className='show-material'>
          <div className='row'>

            <iframe class="yt-iframe" src={`https://www.youtube.com/embed/${url}`} height="450px" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen controlers ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowMaterial