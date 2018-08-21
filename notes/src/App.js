import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import './App.css';
import notes from './assets/init_notes';
import NoteList from './components/NoteList.js';
import HeadCtrls from './components/HeadCtrls.js';
import NewNote from './components/NewNote.js';


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

  handleNewNote = (input) => {
    input.id = input.title;
    let notes = this.state.notesArr.slice();
    notes.push(input);
    this.setState({ notesArr: notes })
  }

  render() {
    return (
      <AppContainer>
        <Route path="/addnote" render={props => { return <NewNote handleNewNote={this.handleNewNote}/>}} />
        <HeadCtrls />
        <NoteList notes={this.state.notesArr} />
      </AppContainer>
    )
  }
}

export default App;
