import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

// Views
import NotesView from './views/NotesView';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav>
            <Link to='/'>Home</Link>  
          </nav>

          <Fragment>
            <Route 
              exact
              path='/'
              component={NotesView}
            />
          </Fragment>
      </div>
    );
  }
}

export default App;
