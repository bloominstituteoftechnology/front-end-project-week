import React, { Component } from "react";
// import ListView from './components/ListView';
// add to views later if needed
import { NoteListViewers, NavBarViewers } from "./views";
// import FriendForm from './components/FriendForm'
import "./App.css";
// import CreateNewView from "./components/CreateNewView";
// import EditView from "./components/EditView";
// import NoteView from "./components/NoteView";
// import DeleteModal from "./components/DeleteModal";

// import { Route, Switch } from 'react-router-dom';
import { SingleNote, NoteView, ListView, EditView, NavBar } from './components' ;
// to do WrongURL


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
      {/* <NavBar />
      <Switch>
        <div className='Nav-Bar-2'>
          <Route exact path = '/listview' component={ListView} />
          <Route exact path = '/editview' component={EditView} />
        </div>
      </Switch> */}
      <NavBarViewers />
        {/* <ListView /> */}
        {/* <CreateNewView /> */}
        {/* <NoteView /> */}
        {/* <EditView /> */}
        {/* <DeleteModal /> */}
        <NoteListViewers />

      </div>
    )
  }
}

export default App;
