import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Products from './pages/product/Products'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
