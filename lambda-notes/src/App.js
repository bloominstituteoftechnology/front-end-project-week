import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router';

import Navigation from './components/Navigation/Navigation';
import YourNotes from './components/Notes/YourNotes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response);
        this.setState({
        notes: response.data
      })})
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render={() => {
          if (!this.state.notes.length) {
            return <h2>Loading...</h2>;
          } else {
            return <YourNotes notes={this.state.notes} />;
          }
        }} />
      </div>
    );
  }
}

export default App;
