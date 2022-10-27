import React, { useState } from 'react'
import './StudyMaterial.css'
import axios from 'axios';
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'
import StudyMaterialHeaderImg from './img/study-material-header-img.png'


function StudyMaterial() {

  let navigate = useNavigate();

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const [courseCode, setCourseCode] = useState("")
  const [contentType, setContentType] = useState("")

  async function addStudyMaterial() {
    const response = await axios.post("/studymaterial", {
      title: title,
      description: description,
      url: url,
      courseCode: courseCode,
      contentType: contentType
    })

    if (response) {
      swal.fire({
        title: 'Success',
        text: 'Study Material Added Successfully...🤗'
      })
      navigate("/")
    }
    else {
      swal.fire({
        title: 'Error',
        text: 'Study  Material Not Added...😭'
      })
    }
  }
    return (
      <>
        <div className="container">
          <div className="studymaterial-card">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="study-material-img mx-auto d-block"
                  src={StudyMaterialHeaderImg}
                  alt=""
                />

              </div>
              <div className="col-md-6 mt-5">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="url"
                      placeholder="URL"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="courseCode"
                      placeholder="Course Code"
                      value={courseCode}
                      onChange={(e) => setCourseCode(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <select className="form-select" aria-label="Select Content Type"
                    value={contentType} onChange={(e) => setContentType(e.target.value)}>
                      <option> Select Content Type </option>
                      <option value="pdf">PDF</option>
                      <option value="link">Link</option>
                      <option value="video">Video</option>
                    </select>
                  </div>
                  <button className="button-add-material w-100 mb-3" type="button" onClick={addStudyMaterial}>
                    <i class="fa-solid fa-right-to-bracket"></i> Study Material
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default StudyMaterial
