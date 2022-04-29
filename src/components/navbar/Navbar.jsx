import React from 'react'
import ToggleButton from '../SideDrawer/ToggleButton'
import './navbar.css'

const Navbar = (props) => (
  <header className='navbar'>
    <nav className='nav'>
      <div className='navbar-btn'>
        <ToggleButton click={props.drawerClickHandler} />
      </div>
      <div className='logo'>
        <a href='/'>79Chops</a>
      </div>
      <div className='space'></div>
      <div className='links'>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Products</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Navbar
