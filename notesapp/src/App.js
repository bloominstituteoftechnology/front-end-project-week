import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavBar/NavBar";
import NoteList from "./components/ListView/NoteList";
import IndividualNote from "./components/ListView/IndividualNote";
import NoteForm from "./components/NewNoteView/NoteForm";
import { AppDiv } from "./Styles/AppStyles";
import { Route } from "react-router-dom";
import axios from "axios";

const URL = 'https://jstodd-projectweek-backend.herokuapp.com/api/notes/'

const existingNote = {
  title: "",
  textBody: "",
  tags: []
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      noteObj: {
        title: "",
        textBody: "",
        tags: []
      },
      isEditing: false,
      editingID: null,
      filteredNotes: [],
      filterTarget: ""
    };
  }

  componentDidMount() {
    axios
      .get(`${URL}`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => alert(error));
  }

  // New/Edit Input Change Handler
  changeHandler = ev => {
    this.setState({
      noteObj: {
        ...this.state.noteObj,
        [ev.target.name]: ev.target.value
      }
    });
  };

  tagsHandler = ev => {
    this.setState({
      noteObj: {
        ...this.state.noteObj,
        [ev.target.name]: ev.target.value.split(",")
      }
    });
  };

  //SearchBar Change Handler
  searchBarHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  filter = ev => {
    this.searchBarHandler(ev);
    this.setState(prevState => {
      const filteredNotes = prevState.notes.filter(note => {
        return (
          note.title.toLowerCase().includes(prevState.filterTarget) ||
          note.textBody.toLowerCase().includes(this.state.filterTarget)
        );
      });
      return { filteredNotes: filteredNotes };
    });
  };

  addNote = () => {
    if (
      this.state.noteObj.title === "" ||
      this.state.noteObj.textBody === "" ||
      this.state.noteObj.tags === ""
    ) {
      return alert("All fields must have content, please try again.");
    }
    axios
      .post(`${URL}`, this.state.noteObj)
      .then(response => {
        this.state.noteObj.id = response.data.id;
        this.setState({
          notes: [this.state.noteObj, ...this.state.notes],
          noteObj: {
            title: "",
            textBody: "",
            tags: ""
          },
          downloadAllModal: false
        });
      })
      .catch(error => alert(error));
  };

  deleteNote = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`${URL}/${id}`)
      .then(response => {
        // console.log(this.state.notes.filter(note => note.id.toString() !== id))
        // console.log(id)
        const deletedNotes = this.state.notes.filter(note => note.id.toString() !== id);
        this.setState({ notes: deletedNotes });
      });
  };

  editNote = () => {
    axios
      .put(
        `${URL}/${this.state.editingID}`,
        this.state.noteObj
      )
      .then(response => {
        const updatedNotes = this.state.notes.map(note => {
          if (response.data.id == note.id) {
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
      editingID: note.id
    });
  };

  openDLAModal = () => {
    this.setState({ downloadAllModal: true });
  };

  closeDLAModal = () => {
    this.setState({ downloadAllModal: false });
  };

  render() {
    return (
      <AppDiv>
        <NavigationBar
          filterTarget={this.state.filterTarget}
          filter={this.filter}
          notes={this.state.notes}
          downloadAllModal={this.state.downloadAllModal}
          openDLAModal={this.openDLAModal}
          closeDLAModal={this.closeDLAModal}
        />
        <Route
          exact
          path="/home"
          render={props => (
            <NoteList
              {...props}
              notes={
                this.state.filteredNotes.length > 0
                  ? this.state.filteredNotes
                  : this.state.notes
              }
            />
          )}
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
              tagsHandler={this.tagsHandler}
            />
          )}
        />
      </AppDiv>
    );
  }
}

export default App;
