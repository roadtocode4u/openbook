import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import swal from "sweetalert";
import headerImage from './img/header-login-img.png';
import {useNavigate} from 'react-router-dom'

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function checkLogin() {
    const response = await axios.post('/login', {
      email: email,
      password: password
    })

    if (response.data.success) {
      localStorage.setItem('openBookUser', JSON.stringify(response.data.data));
      swal("Login Successfully !!");
      navigate('/')
      
    }
    else {
      swal("Invalid Credentials")
    }

      setEmail("");
      setPassword("")
  }

  return (
    <>
      <div className='container mt-5'>
      <div className='login-card'>
        <div className='row'>
          <h2 className='text-center mt-5'>Login</h2>
          <div className='col-md-6 mt-3'>
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
              <button className="login-page-btn w-100 mb-3" type="button" onClick={checkLogin}>
                <i class="fa-solid fa-right-to-bracket"></i> Login
              </button>
            </form>
          </div>

          <div className='col-md-6'>
            <div className='mt-3 image mb-3 '>
              <img
                src={headerImage}
                alt=""
                className="login-img mx-auto d-block "
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login