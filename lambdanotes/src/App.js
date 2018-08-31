import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Notes from "./components/Notes";
import Note from "./components/Note";
import dummyData from "./components/dummydata";
import AddNote from "./components/Addnote";
import EditNote from "./components/Editnote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: dummyData,
      newtitle: "",
      newtext: "",
      id: null,
    }
  }

  handleNoteSubmit = note => {
    console.log('clicked')
        const newNote = {id: this.state.notes.length,
                        title: note.newtitle,
                        text: note.newtext,}
        this.setState( { notes: [...this.state.notes, newNote] });

	};


  handleInputChange = event => {this.setState({ [event.target.name]: event.target.value })};

  handleEditNote = editNote => {
      this.setState(prevState => ({
        notes: prevState.notes.map(note => {
          if (note.id == editNote.id) {
            return editNote;
          } else {return note}
        }),
      }));
  }

  handleDeleteNote = id => {
    console.log('clicked', id)
      this.setState(prevState => ({
        notes: prevState.notes.filter(note => note.id != id),
      }));
  };


  render() {
    console.log(this)
    return (
      <div>
        <Navbar />
        <Switch>
         <Route exact path="/"
            render={() => <div>HOME page here</div>}
        />

        <Route exact path="/add"
            render={props => (
                <AddNote {...props} onSubmit={this.handleNoteSubmit} />
            )}
        />
          
        <Route exact path="/notes"
            render={props => (
                <Notes {...props}
                      notes={this.state.notes}
                      onClick={this.handleDeleteNote}
                      />
            )}
        />

        <Route exact path="/notes/:id"
            render={props => (
                <Note {...props} notes={this.state.notes} 
                                 submitDelete={this.handleDeleteNote}
                                 submitEdit={this.handleEditNote}/>
            )}
        />
        </Switch>
        </div>
    );
  }
}

export default App;
