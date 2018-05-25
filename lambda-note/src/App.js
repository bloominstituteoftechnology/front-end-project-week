import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Route,Switch} from 'react-router-dom';
import SideBar from './components/sideBar';
import MainBar from './components/MainBar';
import NoteListView from './components/NoteListView';
import EditNote from './components/editNote';
import CreateNote from './components/createNote';
import NoteView from './components/noteView';
import DeleteConfirm from './components/deleteConfirm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        noteList : [{'title': "Card Title",
                    "noteBody" : "App State With supporting text below as a natural lead-in to additional content."}],
        title : '',
        noteBody : '',

     }
}

handleInput = (e) =>{
  this.setState({ [e.target.name]: e.target.value });
}

addNote = () => {
  const newNote = {title : this.state.title , noteBody : this.state.noteBody, id: Date.now()}
  const noteList = [...this.state.noteList];
  noteList.push(newNote);
  this.setState({title : '', noteBody : '', noteList })
  console.log(this.state)
}

  render() {
    const mainBar = {
      backgroundColor: "#F3F3F3",
      height: "100vh",
      width: "75vw",

    }
    return (
      <div className = "App">
      <Container className = "container">
      <Row>
        <SideBar />
        <div className="col-md-9" style={mainBar} >
        <Switch>
          <Route exact path = "/" render ={() => <NoteListView noteList ={this.state.noteList}/>}/>
          <Route path="/create" render={() => <CreateNote handleInput={this.handleInput} addNote={this.addNote} />}/>
          <Route path="/viewNote" render={() => <NoteView />}/>
          <Route path = "/editNote" render ={() => <EditNote />}/>
          <Route path="/delete" component = { DeleteConfirm } />
       </Switch>
    </div>

      </Row>
      </Container >
      </div>
    );
  }
}

export default App;
