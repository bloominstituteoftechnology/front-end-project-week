import React, { Component } from 'react';
import axios from 'axios';
import NotesContainer from './components/notes-container/NotesContainer';
import SidebarContainer from './components/sidebar/SideBarContainer';
import styled from 'styled-components'
import './App.css';

const ContainerWrap = styled.div `
width: 100%;
height:auto;
display: flex;
flex-direction: row;
`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote:'',
      newTitle:'',
   
       };
    };
  
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
     
  }
  
 

  render() {
    return (
      <ContainerWrap>
      <SidebarContainer/>
      <NotesContainer 
      notes={this.state.notes} 
      />
      </ContainerWrap>

    );
  }
}

export default App;


  