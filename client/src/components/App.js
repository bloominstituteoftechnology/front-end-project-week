import React, { Component } from 'react';
import NavBar from './NavBar/index';
import Notes from './Notes/index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddNote from './AddNote/index';


const Test = () => {
  return <div>route</div>;
}

class App extends Component {
  constructor(props) {
    super(props);



  }

  addNote() {

  }


  render() {

    return (
      <Router>
        <div>
          <NavBar />
          <Route path='(/|/Notes/All)' component={Notes} />
          <Route path='/Notes/New' component={AddNote} />

        </div>
      </Router>
    );
  }
}

export default App;
