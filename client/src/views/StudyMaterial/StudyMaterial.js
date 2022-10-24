import React from 'react'
import './StudyMaterial.css'
import StudyMaterialHeaderImg from './img/study-material-header-img.png'

function StudyMaterial() {
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
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Description"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="URL"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="courseCode"
                    placeholder="Course Code"
                  />
                </div>
                <div className="mb-3">
                  <select className="form-select" aria-label="Select Content Type">
                    <option> Select Content Type </option>
                    <option value="pdf">PDF</option>
                    <option value="link">Link</option>
                    <option value="video">Video</option>
                  </select>
                </div>
                <button className="button-add-material w-100 mb-3" type="button">
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