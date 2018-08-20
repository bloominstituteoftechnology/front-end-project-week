import React, { Component } from 'react';
import Menu from './components/menu';
import Notes from './components/notes';
import {Route} from 'react-router-dom';
import dummydata from './dummydata';
import './CSS/listview.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: dummydata
    }
  }
  render() {
    return (
      <div className="page">
        <Menu />
        <Route exact path="/" render={(props) => <Notes {...props} notes={this.state.notes}/>}/>
      </div>
    );
  }
}

export default App;
