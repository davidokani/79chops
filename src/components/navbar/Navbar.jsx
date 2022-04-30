import React from 'react'
import { Link } from 'react-router-dom'
import ToggleButton from '../SideDrawer/ToggleButton'
import './navbar.css'

const Navbar = (props) => (
  <header className='navbar'>
    <nav className='nav'>
      <div className='navbar-btn'>
        <ToggleButton click={props.drawerClickHandler} />
      </div>
      <h1 className='logo'>
        <Link to='/'>79Chops</Link>
      </h1>
      <div className='space'></div>
      <div className='links'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Navbar
