import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App
