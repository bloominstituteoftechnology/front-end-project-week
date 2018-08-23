import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import ListView from './Components/ListView/ListView.js';
import AddNote from './Components/AddNote/AddNote.js';
import OneView from './Components/OneView/OneView.js';
import axios from 'axios';
import EditNote from './Components/EditNote/EditNote.js';





class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],

    }
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((response) => {
        this.setState({ notes: response.data })
      })
      .catch(err => console.log(err));
  }

  handleRefresh = () => {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((response) => {
        this.setState({ notes: response.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => <ListView notes={this.state.notes} />} />
          <Route exact path='/new' component={AddNote} />
          <Route path='/edit/:id' render={(props) => <EditNote {...props} notes={this.state.notes} handleRefresh={this.handleRefresh}/> } />
          <Route path='/note/:id' render={(props) => <OneView {...props} handleRefresh={this.handleRefresh}/> } />
        </Switch>

      </div>
    );
  }
}

export default App;
