import React, { Component } from "react";

import { Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import CreateNewView from "./components/CreateNewView";
import ListView from "./components/ListView";
import NoteView from "./components/NoteView";
import { AppWrapper } from "./components/Styled";

class App extends Component {
 

  //
  // goToEdit = (e, id) => {
  //   e.preventDefault();
  //   const editedNote = this.state.notes.find(note => note.id === id);
  //   this.setState({ note: editedNote });
  // };

  // editNote = id => {
  //   axios
  //     .put(`https://fe-notes.herokuapp.com/note/edit/:id`, this.state.note)
  //     .then(res => {
  //       this.setState({ notes: res.data, isUpdating: false });
  //     })
  //     .catch(err => console.log(err.res));
  // };

  // deleteNote = id => {
  //   axios
  //     .delete(`https://fe-notes.herokuapp.com/note/delete/:id`)
  //     .then(res => {
  //       console.log("you have successfully ditched this note");
  //       this.setState({ notes: res.data });
  //     })
  //     .catch(err => console.log(err, "note could not be deleted"));
  // };

  render() {
    return (
      <AppWrapper>
        <SideBar />

        <Route exact path="/note-form" component={CreateNewView}  />
        <Route exact path="/note/:id" component={NoteView} />
        <Route exact path="/" component={ListView} />
      </AppWrapper>
    );
  }
}

export default App;
