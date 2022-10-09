import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
    return (
        <>
        <div className='navbar-main-div'>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-openbook sticky-top shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="#">
                        <h3><b className='nav-color'>Open-Book📖</b></h3>
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
                                    <h5><b className='nav-color'>Home</b></h5>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    <h5><b className='nav-color'>Add Courses</b></h5>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to=" ">
                                    <h5><b className='nav-color'>Notes</b></h5>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse navbar-sizing" id="navbarNav" style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">
                                    <h5 className='nav_register nav-color'><b>Signup</b></h5>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    <h5 className='nav_register nav-color'><b>Login</b></h5>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}
