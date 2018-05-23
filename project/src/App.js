import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './createNew.css';
import './noteView.css';
import './editView.css';

import { Route } from 'react-router-dom';
// import displayList from './displayList';
// import createNew from './createNew';
// import noteView from './noteView';
import editView from './editView';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Route exact path="/" component={displayList}></Route>*/}
        {/*<Route path="/" component={createNew}></Route>*/}
        {/*<Route path="/" component={noteView}></Route>*/}
        <Route path="/" component={editView}></Route>
      </div>
    );
  }
}

export default App;
