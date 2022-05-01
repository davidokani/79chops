import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='App'>
      <div className='content'>
        <h1>About Us</h1>
        <div className='grid-flex'>
          <div className='col-image'>
            <img src='/images/pic1.jpg' alt='img1' />
          </div>
          <div className='col-text'>
            <p>
              79Chops is a proudly African company that works in the hospitality
              industry in the region.
            </p>
          </div>
        </div>

        <div className='grid-flex'>
          <div className='col-image'>
            <img src='/images/pic2.jpg' alt='img2' />
          </div>
          <div className='col-text'>
            <p>The brand operates through several stores in Africa.</p>
          </div>
        </div>

        <div className='grid-flex'>
          <div className='col-image'>
            <img src='/images/pic3.jpg' alt='img3' />
          </div>
          <div className='col-text'>
            <p>
              We're your go to place for fine dining and unique experiences{' '}
            </p>
          </div>
        </div>

        <div className='grid-flex'>
          <div className='col-image'>
            <img src='/images/pic4.jpg' alt='img4' />
          </div>
          <div className='col-text'>
            <p>
              Our mission is to be the most sought-after experience in
              indiginous cuisine.{' '}
            </p>
          </div>
        </div>

        <div className='grid-flex'>
          <div className='col-image'>
            <img src='/images/pic5.jpg' alt='img5' />
          </div>
          <div className='col-text'>
            <p>
              Our fundamental principles are INNOVATION, QUALITY, UNPARALLELED
              AMBIENCE, and CONSISTENCY.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
