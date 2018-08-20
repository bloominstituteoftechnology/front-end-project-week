import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NoteList from './components/NoteList';
import SideBar from './components/SideBar';
// import SingleNote from './components/SingleNote';
// import UpdateForm from './components/UpdateForm';
// import CreateForm from './components/CreateForm';

const APP = styled.div`
  display: flex;
  width: 888px;
  margin: auto;
  border: 1px solid #a6a6a6;
  font-size: 1.6rem;
`

class App extends Component { 
  render() {
    return (
      <Router>
        <APP className="App">
          <SideBar />
          <Switch>
            <Route exact path='/' component={NoteList} />
            {/* <Route path='/notes/:id' component={SingleNote} />
            <Route path='/edit/:id' component={UpdateForm} />
            <Route path='/create' component={CreateForm} /> */}
          </Switch>
        </APP>
      </Router>
    );
  }
}

export default App;
