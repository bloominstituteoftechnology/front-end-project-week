import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import CreateNewView from "./components/CreateNewView";
import ListView from "./components/ListView";
import NoteView from "./components/NoteView";
import { AppWrapper } from "./components/Styled";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        title: "",
        textBody: ""
      },
      isUpdating: false
    };
    // may not need this....depending on how i decide to organize
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "failed to get api"));
  }

  //
  changeHandler = e => {
    this.setState({
      note: {
        ...this.state.note,
        [e.target.name]: e.target.value
      }
    });
  };
  //

  addNote = e => {
    e.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", this.state.note)
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "failed to create"));
  };

  //
  goToEdit = (e, id) => {
    e.preventDefault();
    const editedNote = this.state.notes.find(note => note.id === id);
    this.setState({ isUpdating: true, note: editedNote });
  };

  editNote = id => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, this.state.note)
      .then(res => {
        this.setState({ notes: res.data, isUpdating: false });
      })
      .catch(err => console.log(err.res));
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        console.log("you have successfully ditched this note");
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "note could not be deleted"));
  };

  render() {
    if (this.state.notes.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <AppWrapper>
        <SideBar />

        <Route
          path="/note-form"
          render={() => (
            <CreateNewView
              note={this.state.note}
              addNote={this.addNote}
              changeHandler={this.changeHandler}
              isUpdating={this.state.isUpdating}
            />
          )}
        />
        <Route
          path="/note/:id"
          render={props => (
            <NoteView
              {...props}
              // editNote={this.editNote}
              // deleteNote={this.deleteNote}
              //save for later
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <ListView
              {...props}
              notes={this.state.notes}
            />
          )}
        />
      </AppWrapper>
    );
  }
}

export default App;
