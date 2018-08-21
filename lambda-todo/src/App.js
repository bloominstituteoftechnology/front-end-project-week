import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav Links/Nav";
import NotesHolder from "./Home/HomePage/NotesHolder";
import NewNotePage from "./New Note/NewNotePage";
import { Route } from "react-router-dom";
import Notes from "./Notes/NotesData";
import ViewNote from "./ViewNote/ViewNote";
import EditNote from "./ViewNote/Edit Note/EditNote"

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: Notes, 
      deleting: false, 
      title: '', 
      content: '', 
    };
  }
  addNote = event =>{
    event.preventDefault(); 
    const notes = this.state.notes.slice();
    notes.push(
    {
      title: this.state.title, 
      content: this.state.content, 
    }); 
    this.setState({notes, title: '', content: ''})
  }
  inputChange= e =>{
    this.setState({[e.target.name]: e.target.value })
  }

  deleteBox = () => {
    let deleting = !this.state.deleting
    this.setState({ deleting });
  };

  deleteNote = (id) => {
    let copiedNote = this.state.notes.slice();
    let notesLeft = copiedNote.filter(note => note.id != id)
    console.log(notesLeft);
     this.setState({ notes: notesLeft, deleting: false });
  };
  
  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <Nav />
        </div>
        <div className="pages">
          <Route exact path="/" render={props => <NotesHolder {...props}  notes={this.state.notes} />} />
          <Route
            path="/create-new"
            render={props => 
            <NewNotePage 
            {...props} 
            notes={this.state.notes} 
            handleInputChange={this.inputChange}
            handleAddNote={this.addNote}
            value={this.state.notes}
            />}
          />
           <Route
            exact
            path="/view-note/:id"
            render={props => <ViewNote {...props}
             notes={this.state.notes} 
             deleteBox={this.deleteBox}
             deleting={this.state.deleting}
             deleteNote={this.deleteNote}
             />}
          />
          <Route
            path="/view-note/edit/:id"
            render={props => <EditNote {...props} notes={this.state.notes} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
