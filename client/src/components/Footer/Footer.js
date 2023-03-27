import React from "react";
import "./Footer.css"

export default function Footer() {
    return (
        <div >

            <footer class="site-footer mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-3">
                            <p class="text-justify">
                                <h4>Open-Book 📖</h4>
                                High quality coding education created by an Open-Book community.
                            </p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <a href="/" className="links">Home</a>
                                <a href="/studymaterial-add" className="links">Add Study Material</a>
                                <a href="/signup" className="links">Signup</a>
                                <a href="/login" className="links">Login</a>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Tech Stack</h6>
                            <ul class="footer-links">
                                <li>Express.js</li>
                                <li>Node.js</li>
                                <li>React.js</li>
                                <li>MongoDB</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>About Me</h6>
                            <p className="paragraph"><i class="fa-solid fa-location-dot"></i> Pune, Maharashtra</p>
                            <p className="paragraph"><i class="fa-solid fa-phone"></i> +91-7821011979</p>
                            <p className="paragraph"><i class="fa-solid fa-envelope"></i> itspinki05@gmail.com
                            </p>
                          <div className="footer-div">
                        
                                   <a href="https://www.linkedin.com/in/vaibhavihole31/" target="_blank"><div className="footer-div icon-div1"><i class="fa-brands fa-linkedin"></i></div></a>
                                
                                   <a href="https://github.com/Vaibhavihole31" target="_blank"><div className="footer-div icon-div2"><i class="fa-brands fa-github"></i></div></a>     
                          </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}