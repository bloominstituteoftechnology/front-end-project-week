import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './components/Home';
import NoteProfile from './components/NoteProfile';

const AppWrapper = styled.div`
text-align: center;
display: flex;
width: 100%;
`

const Sidebar = styled.nav`
    width: 25%;
    border-right: 2px solid #8e8b8b;
    align-self: flex-start;
    justify-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #bfbcbc;
    height: 100vw;
    > div {
          color: white;
          background-color: #16ccc9;
          width: 85%;
          height: 60px;
          font-size: 20px;
          border: 1px solid #8e8b8b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bolder;
          margin-bottom: 30px;
          &:hover {
            color: #16ccc9;
            background-color: white;
            border: 1px solid #16ccc9
          }
    }
`

const SidebarHeader = styled.h1`
    margin: 40px 0;
    font-weight: bold;
    font-size: 60px;
    text-align: start;
    line-height: 50px;
    color: #545252;
`

class App extends Component {
  render() {
    return  <AppWrapper>
                <Sidebar>
                    <SidebarHeader>
                        Lambda <br/> Notes
                    </SidebarHeader>
                    <div>View Your Notes</div>
                    <div>+ Create New Note</div>
                </Sidebar>
                <Route exact path='/' render = {props => <Home {...props} />} />
                <Route exact path='/note/:id' render = {props => <NoteProfile {...props} />} />     
            </AppWrapper>
  }
}

export default App;
