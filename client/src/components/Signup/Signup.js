import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import swal from "sweetalert";
import headerImage from "./img/signup-girl.png";
import {useNavigate} from 'react-router-dom';

function Signup() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  async function addUser() {
    const response = await axios.post('/signup', {
      fullName: fullName,
      email: email,
      password: password,
      mobile: mobile
    })

    if(response.data.success)
    {
      swal("Signup Successfully !!");
      navigate('/login');
    }
    else{
      swal(response.data.message)
    }

    setFullName("");
    setEmail("");
    setPassword("");
    setMobile("");
  }

  return (
    <>
      <div className='container mt-5'>
        <div className=' card-signup'>
        <div className='row'>
          <h2 className='text-center mt-3'>Open-Book📖</h2>
          <h4 className="text-center mt-2 ">
            ✏️ Learn Faster, Study Better !!
          </h4>
          <div className='col-md-6'>
            <div className='mt-5 '>
              <img
                src={headerImage}
                alt=""
                className="signup-image mx-auto d-block"
              />
            </div>
          </div>
          <div className='col-md-6 mt-3 '>
            <form>

              <div className="mb-3 mt-5" >
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder='FullName'
                  value={fullName} onChange={(e) => { setFullName(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email} onChange={(e) => { setEmail(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password} onChange={(e) => { setPassword(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="phone"
                  className="form-control"
                  id="mobile"
                  placeholder="Mobile Number"
                  value={mobile} onChange={(e) => { setMobile(e.target.value) }}
                />
              </div>
              <button className="signup-page-btn w-100 mb-5" type="button" onClick={addUser}>
                <i class="fa-solid fa-right-to-bracket"></i> Signup
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Signup