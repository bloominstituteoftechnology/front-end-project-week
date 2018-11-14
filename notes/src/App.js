import React, { Component } from 'react';
import './App.scss';
import MainSection from './components/MainSection';
import SideBar from './components/sidebar'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className='appContainer'>
      <SideBar className='sideBar'/>
      <MainSection className='mainSection'/>
      </div>
    );
  }
}

export default App;
