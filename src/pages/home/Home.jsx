import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className='homeLeftContainer'>
        <h1 className='intro'>Welcome to 79chops</h1>
        <p className='paraIntro'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          consectetur, quaerat obcaecati delectus nostrum voluptas consequatur
          nam totam accusantium! Facere quisquam incidunt tempora, quidem
          accusamus nulla culpa facilis ullam rem!
        </p>
      </div>
      <div className='homeRightContainer'>
        <img src='/images/pic5.jpg' alt='img5' />
      </div>
    </div>
  )
}

export default Home
