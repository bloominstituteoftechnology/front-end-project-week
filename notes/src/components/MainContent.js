import React from "react";
import NoteList from "./NoteList";
import { Route } from "react-router";
import NoteView from "./NoteView";
import Fourm from "./Fourm";
import "./maincontent.css";
import axios from "axios";
import EditFourm from "./EditFourm";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: {
        tags: [],
        title: "",
        textBody: "",
        _id: ""
      },
      editingId: null,
      activeNote: {
        tags: [],
        title: "test note",
        textBody: "testing",
        _id: "3333"
      },
      isDeleting: false
    };
  }

  componentDidMount() {
    this.updateNotes();
  }

  updateNotes = () => {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response =>
        this.setState({
          notes: response.data
        })
      )
      .catch(err => console.log(err));
    console.log("updated");
  };

  getNoteById = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => this.setState({ activeNote: response.data }))
      .catch(err => console.log(err));
  };

  changeHandler = ev => {
    this.setState({
      note: {
        ...this.state.note,
        [ev.target.name]: ev.target.value
      }
    });
  };

  addNewNote = () => {
    axios
      .post("https://fe-notes.herokuapp.com/note/create", this.state.note)
      .then(response => {
        this.state.notes.push({
          ...this.state.note,
          _id: response.data.success
        });
        this.setState({
          notes: this.state.notes,
          editingId: null,
          item: {
            tags: [],
            title: "",
            textBody: "",
            _id: ""
          }
        });
      })
      .catch(error => console.log(error));
  };

  deleteNote = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        const newNotes = this.state.notes.filter(note => {
          return note._id !== this.state.activeNote._id;
        });
        this.setState({ notes: newNotes });
      })
      .catch(error => console.log(error));
  };

  updateNote = () => {
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${this.state.editingId}
        `,
        this.state.note
      )
      .then(response => {
        const newNotes = this.state.notes.map(note => {
          if (note._id === response.data._id) return response.data;
          else return note;
        });
        console.log(newNotes);
        this.setState({
          notes: newNotes,
          editingId: null,
          item: {
            tags: [],
            title: "",
            textBody: "",
            _id: ""
          }
        });
      })
      .catch(error => console.log(error));
  };
  setUpUpdateForm = (ev, note) => {
    ev.preventDefault();
    this.setState({
      note,
      editingId: note._id
    });
  };
  deletingToggle = ev => {
    ev.preventDefault();
    if (!this.state.isDeleting) {
      this.setState({
        isDeleting: true
      });
    } else {
      this.setState({
        isDeleting: false
      });
    }
  };
  render() {
    return (
      <>
        <div className="main-content-container">
          <Route
            exact
            path="/"
            render={props => (
              <NoteList
                match={props.match}
                history={props.history}
                location={props.location}
                notes={this.state.notes}
                getNoteById={this.getNoteById}
              />
            )}
          />
          <Route
            exact
            path="/note/:id"
            render={props => (
              <NoteView
                match={props.match}
                history={props.history}
                location={props.location}
                deleteNote={this.deleteNote}
                note={this.state.activeNote}
                updateNote={this.setUpUpdateForm}
                isDeleting={this.state.isDeleting}
                deletingToggle={this.deletingToggle}
              />
            )}
          />
          <Route
            path="/fourm"
            render={props => (
              <Fourm
                {...props}
                addNewNote={this.addNewNote}
                changeHandler={this.changeHandler}
                note={this.state.note}
              />
            )}
          />
          <Route
            path="/note/:id/edit"
            render={props => (
              <EditFourm
                match={props.match}
                history={props.history}
                location={props.location}
                changeHandler={this.changeHandler}
                note={this.state.note}
                updateNote={this.updateNote}
                activeNote={this.state.activeNote}
              />
            )}
          />
        </div>
      </>
    );
  }
}

export default MainContent;
