import React from 'react'
import './Signup.css';
import headerImage from "./img/signup-girl.png"

function Signup() {
  return (
    <>
      <div className='container card mt-5'>
        <div className='row'>
          <h2 className='text-center mt-5'>Open-Book📖</h2>
          <h4 className="text-center mt-2 ">
            ✏️ Learn Faster, Study Better !!
          </h4>
          <div className='col-md-6'>
            <div className='mt-5 '>
              <img
                src={headerImage}
                alt=""
                className="img-fluid mx-auto d-block header-display-img"
              />
            </div>
          </div>
          <div className='col-md-6 mt-3 d-flex flex-column justify-content-evenly'>
            <form>

              <div className="mb-3 mt-5">
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder='FullName'
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="phone"
                  className="form-control"
                  id="mobile"
                  placeholder="Mobile Number"
                />
              </div>
              <button className="btn btn-warning w-100 mb-5" type="button">
                <i class="fa-solid fa-right-to-bracket"></i> Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup