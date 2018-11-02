import React, { Component } from "react";
import { NoteListViewers, NavBarViewers } from "./views";
import { SingleNote, NoteView, ListView, EditView, NavBar, CreateNewView } from './components' ;
import "./App.css";

// import { Route, Switch } from 'react-router-dom';

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
      <NoteListViewers />
        {/* <ListView /> */}
        <CreateNewView />
        {/* <NoteView /> */}
        {/* <EditView /> */}
        {/* <DeleteModal /> */}


      </div>
    )
  }
}

export default App;
