import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import notes from './assets/init_notes';
import NoteList from './components/NoteList.js';


const AppContainer = styled.div`
  width:405px;
  margin:0 auto;
`;
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      notesArr: [],
    }
  }

  componentDidMount(){
    this.setState({notesArr: notes});
  }

  handleNewNote = () => {

  }

  render() {
    return (
      <AppContainer>
        <NoteList notes={this.state.notesArr} />
      </AppContainer>
    )
  }
}

export default App;
