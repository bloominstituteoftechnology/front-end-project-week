import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NtsPgeVw from './views/NtsPgeVw';
import NtsLstVw from './views/NtsLstVw';
import NtsIdvVw from './views/NtsIdvVw';
import NtsFrmVw from './views/NtsFrmVw';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={NtsPgeVw} />
          <Route exact path="/nts" component={NtsLstVw} />
          <Route path="/nts/:id" component={NtsIdvVw} />
          <Route path="/nts-frm" component={NtsFrmVw} />
          <Route path="**" component={NtsPgeVw} />
        </Switch>
      </div>
    );
  }
}

export default App;
