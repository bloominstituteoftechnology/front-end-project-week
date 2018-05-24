import React, { Component } from 'react';
import './App.css';
import './createNew.css';
import './noteView.css';
import './editView.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

// import displayList from './displayList';
// import createNew from './createNew';
// import noteView from './noteView';
import editView from './editView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/*<Route exact path="/displayList" component={displayList} />*/}
          {/*<Route path="/createNew" component={createNew} />*/}
          {/*<Route path="/noteView" component={noteView} />*/}
          <Route path="/" component={editView} />
        </Router>
      </div>
    );
  }
}

export default App;
