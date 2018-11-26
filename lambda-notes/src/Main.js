import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateNewView from './Layouts/CreateNewView';
import ListView from './Layouts/ListView';
import Sidebar from './Sidebar';
import NoteView from './Layouts/NoteView';
import EditView from './Layouts/EditView';

 class Main extends Component {

  render() {
    return (
    <Router>
    <React.Fragment>
        <Sidebar />
        <div className="container-fluid">
        <Switch>
           <Route exact path='/' component={ListView} />
           <Route exact path='/note/:id' component={NoteView} />
           <Route exact path='/create' component={CreateNewView} />
           <Route exact path='/edit/:id' component={EditView} />
       </Switch>
          
        </div>
      </React.Fragment>
    </Router>
    )
  }
}

export default Main;