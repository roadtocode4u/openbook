import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import swal from "sweetalert";
import headerImage from './img/header-login-img.png';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function checkLogin() {
    const response = await axios.post('/login', {
      email: email,
      password: password
    })

    if (response.data.success) {
      swal("Login Successfully !!");
    }
    else {
      swal(response.data.message)
    }

      setEmail("");
      setPassword("")
  }


  return (
    <>
      <div className='container card mt-5'>
        <div className='row'>
          <h2 className='text-center mt-5'>Login Form </h2>
          <div className='col-md-6 mt-3 d-flex flex-column justify-content-evenly'>
            <form>
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
              <button className="btn btn-warning w-100 mb-3" type="button" onClick={checkLogin}>
                <i class="fa-solid fa-right-to-bracket"></i> Login
              </button>
            </form>
          </div>

          <div className='col-md-6'>
            <div className='mt-3 image mb-3 '>
              <img
                src={headerImage}
                alt=""
                className="img-fluid mx-auto d-block header-display-img"
              />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login