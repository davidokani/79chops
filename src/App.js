import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
//import toggleButton from './components/SideDrawer/ToggleButton';
//import { render } from '@testing-library/react';
//import sideDrawer from './components/SideDrawer/SideDrawer';
//import backDrop from './components/BackDrop/BackDrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  toggleButtonClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.toggleButtonClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main style={{ marginTop: '95px' }}>
          <p>This is the page content!</p>
        </main>

      </div>
    );
  }
}

export default App;
