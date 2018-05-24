import React, { Component } from 'react';
import './App.css';
import './createNew.css';
import './noteView.css';
import './editView.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import displayList from './displayList';
import createNew from './createNew';
import noteView from './noteView';
import editView from './editView';
import Error from './Error';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={displayList} />
            <Route path="/createNew" component={createNew} />
            <Route path="/noteView" component={noteView} />
            <Route path="/editView" component={editView} />
            <Route component={Error} />          
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
