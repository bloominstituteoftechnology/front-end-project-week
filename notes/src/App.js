import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';



import SideView from './components/SideView';
import NotesPreview from './components/NotesPreview';
import CreateNote from './components/CreateNote';
import ViewOneNote from './components/ViewOneNote';
import DeleteNote from './components/DeleteNote';
import EditNote from './components/EditNote';

class App extends Component {
  render() {
    return (
      <div className="App">

        <SideView />          
        <Route
              path={`/create`}
              render={props =>
              <CreateNote {...props} />
            }
          />
        <Route 
              path='/' 
              exact
              render={props => 
              <NotesPreview {...props}/>
            } 
          />
          <Route 
              exact path="/note/:id"
              render={props=>
              <ViewOneNote {...props} /> }
          />

            <Route 
              path={`/note/delete/:id`}
              render={props=>
              <DeleteNote {...props} /> }
          />
            <Route 
              path={`/note/edit/:id`}
              render={props=>
              <EditNote {...props} /> }
          />
 
      </div>
    );
  }
}

export default App;
