import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SideBar from './components/sideBar';
import MainBar from './components/MainBar';
import NoteListView from './components/NoteListView';
import EditNote from './components/editNote';
import CreateNote from './components/createNote';
import NoteView from './components/noteView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        noteList : [{'title': "Card Title",
                    "noteBody" : "App State With supporting text below as a natural lead-in to additional content."}],
        title : '',
        noteBody : ''
     }
}

handleInput = (e) =>{
  this.setState({ [e.target.name]: e.target.value });
}

addNote = () => {
  const newNote = {title : this.state.title , noteBody : this.state.noteBody}
  const noteList = [...this.state.noteList];
  noteList.push(newNote);
  this.setState({title : '', noteBody : '', noteList })
  console.log(this.state)
}

  render() {

    return (
      <div className = "App">
      <Container className = "container">
      <Row>
        <SideBar />
        <CreateNote handleInput ={this.handleInput} addNote ={this.addNote} />
      </Row>
      </Container >
      </div>
    );
  }
}

export default App;
