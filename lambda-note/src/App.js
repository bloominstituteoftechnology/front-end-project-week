import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Route,Switch} from 'react-router-dom';

import {
  NoteList,
  SideBar,
  NoteView,
  EditNote,
  DeleteConfirm,
  CreateNote
} from './components'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        noteList : [{'title': "Card Title",
                    "noteBody" : "App State With supporting text below as a natural lead-in to additional content.",id:13636663},{'title': "Card Title",
                    "noteBody" : "App State With supporting text below as a natural lead-in to additional content.",id:13636665}],
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

expandNote = (e) => {
  console.log(e.target.value)
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
          <Route exact path = "/" render ={() => <NoteList noteList ={this.state.noteList}/>}/>
          <Route path="/create" render={() => <CreateNote handleInput={this.handleInput} addNote={this.addNote} />}/>
          <Route path="/viewNote/:id" render={(props) => <NoteView {...props} state = {this.state}  />}/>
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
