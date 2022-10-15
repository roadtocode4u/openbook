import React from 'react';
import headerImage from './img/heading-image.png';
import learnImage from './img/learn-img.png';
import buildImage from './img/build-img.png';
import connectImage from './img/connect-img.png';

// Global Components
import { ButtonDark, ButtonWarning } from '../Global/Buttons/';
import { TitleMedium, TitleSmallMedium } from '../Global/Titles/';
import { Paragraph, Image } from '../Global/';
import './Home.css';

const Home = () =>
    (<>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <Image srcURL={ headerImage } altText="" classname="img-fluid mx-auto d-block header-display-image"/>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='info-div text-center main-div'>
              <TitleMedium classname="" text="✏️Learn Faster, Study Better !" />
              <TitleSmallMedium classname="" text="Get access to notes anytime, anywhere." />
              <div className='mt-4'>
                <ButtonWarning icon="magnifying-glass" text="Access Notes" />
                <ButtonDark icon="headset" text="Call us" />
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
          <div className='col-md-6'>
            <TitleMedium className="" text="How it Works" />
            <Paragraph classname="" text="This is the website we wish we had when we were learning on our own.
          We scour the internet looking for only the best resources to supplement
              your learning and present them in a logical order."/>
          </div>

          <div className='col-md-3'>
          </div>
        </div>
      </div>

      <div className='container main-div'>
        <div className='row'>
          <div className='col-md-4'>
            <Image srcURL={ learnImage } altText="" classname="img-fluid mx-auto d-block lbc1-image" />
            <h5 className='text-center mt-2 mb-3'>Learn</h5>
            <Paragraph classname="text-center" text="Learn from a curriculum with the best curated online tutorials, blogs, and courses."/>
          </div>
          <div className='col-md-4'>
            <Image srcURL={ buildImage } altText="" classname="img-fluid mx-auto d-block lbc2-image"/>
            <h5 className='text-center mt-4 mb-3'>Build</h5>
            <Paragraph classname="text-center" text="Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites."/>
          </div>
          <div className='col-md-4'>
            <Image srcURL={ connectImage } altText="" classname="img-fluid mx-auto d-block lbc-image"/>
            <h5 className='text-center mt-3 mb-3'>Connect</h5>
            <Paragraph classname="text-center" text="You're not alone. Learn and get help from our friendly community of beginner and experienced developers."/>
          </div>
        </div>
      </div>
  </> )
    
export default Home