import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './createNew.css';
import './noteView.css';

import { Route } from 'react-router-dom';
// import displayList from './displayList';
// import createNew from './createNew';
import noteView from './noteView';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Route exact path="/" component={displayList}></Route>*/}
        {/*<Route path="/" component={createNew}></Route>*/}
        <Route path="/" component={noteView}></Route>
      </div>
    );
  }
}

export default App;
