import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import NotesList from './components/notesList'

const MainAppContainer = styled.div `
display: flex;
max-width: 1200px; 
width: 98%;
margin: 0 auto;
`
const SideBar = styled.div `
  max-width: 800px; 
  width:100%;
  display: flex; 
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
    margin: 10px 15px;
    background
  h1{
    font-size: 2.8rem; 
    margin-bottom: 20px;
  }
  h3{
    font-size: 1.8rem;
    margin-bottom:20px
  }

`

const App = props =>{
    return (
      <MainAppContainer >
        <SideBar className='side-bar'>
            <h1>Lambda Notes</h1>
            <h3>View Your Notes</h3>
            <h3>+ Create New Note</h3> 
        </SideBar>
        <div>
          <NotesList />
        </div>
      </MainAppContainer>
    );
}

export default App;
