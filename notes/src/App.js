import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Nav} />
      </div>
    );
  }
}

export default App;
