import React from 'react';
import headerImage from './img/heading-image.png';
import learnImage from './img/learn-img.png';
import buildImage from './img/build-img.png';
import connectImage from './img/connect-img.png';
import './Home.css';

function Home() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <img
                src={headerImage}
                alt=""
                className="img-fluid mx-auto d-block header-display-image"
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='info-div text-center main-div'>
              <h3 >✏️Learn Faster, Study Better !</h3>
              <h4> Get access to notes anytime, anywhere. </h4>
              <div className='mt-4'>
                <button type="button" className="btn btn-warning btn-1"><i class="fa-solid fa-magnifying-glass"></i> Access Notes</button>
                <button type="button" className="btn btn-dark btn-2">Call us <i class="fa-solid fa-headset"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='text-center main-div'>
        <h3>How it Works</h3>
        <p>This is the website we wish we had when we were learning on our own.
          We scour the internet looking for only the best resources to supplement
          your learning and present them in a logical order.</p>
      </div> */}

      <div className='container text-center main-div'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'><h3>How it Works</h3>
        <p>This is the website we wish we had when we were learning on our own.
          We scour the internet looking for only the best resources to supplement
          your learning and present them in a logical order.</p></div>
          <div className='col-md-3'>
          </div>
        </div>
      </div>

      <div className='container main-div'>
        <div className='row'>
          <div className='col-md-4'>
            <img
              src={learnImage}
              alt=""
              className="img-fluid mx-auto d-block lbc1-image"
            />
            <h5 className='text-center mt-2 mb-3'>Learn</h5>
            <p className='text-center'>Learn from a curriculum with the best curated online tutorials, blogs, and courses.</p>
          </div>
          <div className='col-md-4'>
            <img
              src={buildImage}
              alt=""
              className="img-fluid mx-auto d-block lbc2-image"
            />
            <h5 className='text-center mt-4 mb-3'>Build</h5>
            <p className='text-center'>Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites.</p>
          </div>
          <div className='col-md-4'>
            <img
              src={connectImage}
              alt=""
              className="img-fluid mx-auto d-block lbc-image"
            />
            <h5 className='text-center mt-3 mb-3'>Connect</h5>
            <p className='text-center'>You're not alone. Learn and get help from our friendly community of beginner and experienced developers.</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home