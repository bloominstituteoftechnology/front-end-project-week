import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateNewView from './Layouts/CreateNewView';
import ListView from './Layouts/ListView';
import Sidebar from './Sidebar';
import NoteView from './Layouts/NoteView';

 class Main extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
        <div className="container-fluid">
        
          <Switch>
              <Route exact path="/" component={ListView} />
              <div className="container">
              <Route exact path="/create" component={CreateNewView} />
              <Route exact path="/notes/:id" component={NoteView} />
              </div>
          </Switch>
        </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default Main;