import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavBar";
import NoteList from "./components/List/NoteList";
import IndividualNote from "./components/List/SingleNote";
import NoteForm from "./components/NewNote/NoteForm";
import { AppDiv } from "./Styles/AppStyle";
import { Route } from "react-router-dom";
import axios from "axios";

const existingNote = {
  title: "",
  textBody: "",
  tags: ""
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      noteObj: {
        title: "",
        textBody: "",
        tags: ""
      },
      isEditing: false,
      editingID: null,
      filteredNotes: [],
      filterTarget: '',

    };
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => alert(error));
  }

  
  changeHandler = ev => {
    this.setState({
      noteObj: {
        ...this.state.noteObj,
        [ev.target.name]: ev.target.value
      }
    });
  };

  
  searchBarHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  filter = ev => {
    this.searchBarHandler(ev);
    this.setState(prevState => {
      const filteredNotes = prevState.notes.filter(note => {
        return note.title.includes(prevState.filterTarget) || note.textBody.includes(this.state.filterTarget)
      })
     return {filteredNotes: filteredNotes}
    })
  }
  

  addNote = () => {
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, this.state.noteObj)
      .then(response => {
        this.state.noteObj._id = response.data.success;
        this.setState({
          notes: [...this.state.notes, this.state.noteObj],
          noteObj: {
            title: "",
            textBody: "",
            tags: ""
          },

        });
      })
      .catch(error => alert(error));
  };

  deleteNote = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        const deletedNotes = this.state.notes.filter(note => note._id !== id);
        this.setState({ notes: deletedNotes });
      });
  };

  editNote = () => {
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${this.state.editingID}`,
        this.state.noteObj
      )
      .then(response => {
        const updatedNotes = this.state.notes.map(note => {
          if (note._id === response.data._id) {
            return response.data;
          }
          return note;
        });
        this.setState({
          notes: updatedNotes,
          editingID: null,
          noteObj: existingNote
        });
      })
      .catch(error => alert(error));
  };

  toggleEditNoteForm = (ev, note) => {
    ev.preventDefault();
    this.setState({
      noteObj: note,
      isEditing: true,
      editingID: note._id
    });
  };

  render() {
    return (
      <AppDiv>
        <NavigationBar filterTarget={this.state.filterTarget} filter={this.filter}/>
        <Route
          exact
          path="/home"
          render={props => <NoteList 
            {...props} 
            notes={this.state.filteredNotes.length > 0
               ? this.state.filteredNotes
               : this.state.notes
              } 
          />}
        />
        <Route
          path="/home/:id"
          render={props => (
            <IndividualNote
              {...props}
              notes={this.state.notes}
              deleteNote={this.deleteNote}
              toggleEditNoteForm={this.toggleEditNoteForm}
            />
          )}
        />
        <Route
          path="/form"
          render={props => (
            <NoteForm
              {...props}
              noteObj={this.state.noteObj}
              changeHandler={this.changeHandler}
              addNote={this.addNote}
              editingID={this.state.editingID}
              isEditing={this.state.isEditing}
              editNote={this.editNote}
            />
          )}
        />
      </AppDiv>
    );
  }
}

export default App;