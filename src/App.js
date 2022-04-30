import React, { Component } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Products from './pages/product/Products'
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/BackDrop/BackDrop'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  toggleButtonClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backDropClickHandler} />
    }

    return (
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.toggleButtonClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '94px' }}>
        </main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products' element={<Products />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='about' element={<About />} />
//         <Route path='contact' element={<Contact />} />
//         <Route path='products' element={<Products />} />
//       </Routes>
//       <Footer />
//     </div>
//   )
// }

export default App;
