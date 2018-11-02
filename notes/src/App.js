import React, { Component } from "react";
import ListView from './components/ListView';
// add to views later if needed
import { NoteListViewers, NavBarViewers } from "./views";
// import FriendForm from './components/FriendForm'
import "./App.css";
import CreateNewView from "./components/CreateNewView";
import EditView from "./components/EditView";
import NoteView from "./components/NoteView";
import DeleteModal from "./components/DeleteModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: ''
    }
  }
  render() {
    return (
      <div className='ENTIRE SITE'>
      <NavBarViewers />
        {/* <ListView />
        <CreateNewView />
        <NoteView /> */}
        {/* <EditView /> */}
        {/* <DeleteModal /> */}
        <NoteListViewers />

      </div>
    )
  }
}

export default App;
