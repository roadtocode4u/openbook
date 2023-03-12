import React from 'react';
import { Link } from "react-router-dom";
import { openBookUser } from './../../utils/getUser'

import './Navbar.css';
import logo from './favicon.png'

export default function Navbar() {

    function logOut() {
        localStorage.removeItem('openBookUser');
        window.location.href = '/login'
    }

    return (
        <>
            <div className='navbar-main-div'>
                <nav className="navbar navbar-expand-lg sticky-top navbar-light navbar-openbook bg-body-tertiary shadow-sm">
                    <div className="container-fluid">
                        <Link className="navbar-brand " to="#">
                            <h3><b className='nav-color'> <img src={logo} /> OpenBook</b></h3>
                        </Link>
                        <button
                            className="navbar-toggler nav-color"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">
                                        <h5><b className='nav-color'>Home </b></h5>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/studymaterial-add">
                                        <h5><b className='nav-color'>AddStudyMaterial</b></h5>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse navbar-sizing" id="navbarNav" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    {!openBookUser && (
                                        <Link className="nav-link" to="/signup">
                                            <button className='nav_register nav-color signup-btn'> <i class="fa-solid fa-user-plus"></i>  <b>Signup</b></button>
                                        </Link>
                                    )}
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    {!openBookUser && (
                                        <Link className="nav-link" to="/login">
                                            <button className='nav_register nav-color login-btn'><i class="fa-solid fa-right-to-bracket"></i> <b>Login</b></button>
                                        </Link>
                                    )}
                                </li>
                                <li>
                                    {openBookUser && (
                                        <Link className="nav-link" to="/">
                                            <button type="button" className='logout-btn' onClick={logOut}> <i class="fa-solid fa-right-from-bracket"></i> <b> Logout</b></button>
                                        </Link>
                                    )}
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
