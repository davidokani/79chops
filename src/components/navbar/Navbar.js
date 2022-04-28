import React, { Component } from 'react'
import { MenuItems } from './menuItems'
import './navbar.css'


// const Navbar = () => {
//   return <div>Navbar</div>
// }

// export default Navbar

class Navbar extends Component {

  render() {
    return {
< nav className = "NavbarItems" >
      <h1 className='navbar-logo'>79</h1>
      <div className='menu-icon'>
      </div>
  <ul>

    {MenuItems.map((tem, index) => {
      return (

) < li key{ index }> <a className={item.cName} href={item.url} {item.title}></a></li >
  })
}
      </ul >
</nav >
    }
}
}

export default Navbar