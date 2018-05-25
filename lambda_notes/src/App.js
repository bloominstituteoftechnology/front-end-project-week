import React, { Component } from 'react';
import Notesidebar from './container/Notesidebar.js';
import { Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import NoteList from './container/components/NoteList.js';
import CreateNote from './container/components/CreateNote.js';
import Notes from './container/func/Notes.js';
import SingleNote from './container/func/SingleNote.js';

import './App.css';
import './container/component.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notesList: [
        {
          "title": "Card_1",
          "content": "fvgbhnjnhbgvfcd",
          id: 1527057950536
        },
        {
          "title": "Card_2",
          "content": "fvgbhnjnhbgvfcd",
          id: 1527057950457
        },
        {
          "title": "Card_3",
          "content": "fvgbhnjnhbgvfcd",
          id: 1527057950123
        },
        {
          "title": "Card_4",
          "content": "fvgbhnjnhbgvfcd",
          id: 1527057950224
        },
        {
          "title": "Card_5",
          "content": "fvgbhnjnhbgvfcd",
          id: 1527057950749
        },
        {
          "title": "Card_6",
          "content": "fvgbhnjnhbgvfcd",
          id: 1527057950194
        },

      ],
      note: {},
    }
  }

  fetchData = (dataFromChild) => {
    console.log("fetchData", dataFromChild);
    this.setState({
      notesList: dataFromChild
    });
  }

  filterNotes = (props) => {
    console.log("Int_prop", props)
    const newArr = this.state.notesList.filter(note => {
      return note.title === props.match.params.title
    })
    return newArr[0];
  }

  deleteNotes = (id) => {
    const newIds = this.state.notesList.filter(note => {
      return note.id !== id
    })
    this.setState({ notesList: newIds })
  }

  editNotes = (title, updNote) => {
    console.log("Int_state", this.state)
    console.log("title", title);
    console.log("updNote", updNote);
    const newNote = this.state.notesList.map((note)=>{
      console.log("note.title", note)
      if(note.title === title){
        return updNote;
      }else{
        return note;
      }
    })
    console.log("editNotes", updNote);
    console.log("state", this.state)
    this.setState({ notesList: newNote})
  }

  render() {
    console.log("NSB", this.props)
    return (
      <React.Fragment >
          <div className="main-container">
            <div className="sidebar">
              <div className="sidebar-div">
              <h1>Lambda Notes</h1>
              <Button className="sidebar-button" ><Link to="/Notes" >View Notes</Link></Button>
              <Button className="sidebar-button" ><Link to="/Create" >+Create Notes</Link></Button>
              </div>
              <Route exact path="/" render={props => <NoteList {...props} NoteData={this.state.notesList} />} />
              <Route exact path="/Notes" render={props => <NoteList {...props} NoteData={this.state.notesList} />} />
            <Route exact path="/Create" render={props => <CreateNote {...props} fetch={this.fetchData} />} />
            <Route path="/Notes/:title" render={props => <SingleNote {...props} NoteData={this.filterNotes(props)} DeleteData={this.deleteNotes} />} />
            <Route path="/Create/edit/:title" render={props => <CreateNote {...props} NoteData={this.state.notesList} EditData={this.editNotes} fetch={this.fetchData} />} />
            </div>
          </div>
      </React.Fragment>

    )
  }
}

export default App;
