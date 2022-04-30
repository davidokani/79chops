import React from 'react'
import './about.css'
// import image1 from '/public/images/pic1.jpg'
// import image2 from '/public/images/pic2.jpg'
// import image3 from '../../../public/images/pic3.jpg'
// import image4 from '/public/images/pic4.jpg'
// import image5 from '/images/pic5.jpg'

function App() {
  return (
    <div className='App'>
      <div className='content'>
        <h1>About Us</h1>
        <div className='talk'>
          <p>
            79Chops Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta itaque autem est illum minima voluptatibus sunt repudiandae. Aliquam doloremque soluta harum autem iste inventore, facilis, accusantium enim iure voluptates quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolore cum sint eum. Dignissimos sed soluta architecto deleniti odit harum, blanditiis ab quaerat distinctio in tempore fugiat, sequi nobis quod. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad repellendus qui tempora quae totam optio at nobis nisi officiis eius, eos pariatur possimus dolore, autem amet laudantium facilis dolorum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi rerum, facilis sunt nam tempore maxime nobis itaque excepturi autem perspiciatis, repellat sapiente fugit impedit ut molestias dolorum voluptas obcaecati corrupti!
          </p>
        </div>
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

export default App
