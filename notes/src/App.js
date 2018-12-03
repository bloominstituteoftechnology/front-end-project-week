import React, { Component } from "react";

import { Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import CreateNewView from "./components/CreateNewView";
import ListView from "./components/ListView";
import NoteView from "./components/NoteView";
import EditView from "./components/EditView";
import DeleteModal from "./components/DeleteModal";
import { AppWrapper } from "./components/Styled";

class App extends Component {
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

        <Route exact path="/note-form" component={CreateNewView} />
        <Route exact path="/note/:id" component={NoteView} />
        <Route exact path="/" component={ListView} />
        <Route exact path="/note/edit/:id" component={EditView} />
        <Route exact path="/note/delete/:id" component={DeleteModal} />
      </AppWrapper>
    );
  }
}

export default App;
