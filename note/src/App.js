import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import axios from 'axios'
import Notes from './components/Notes';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        id: '',
        title: '',
        textBody: ''
      }
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({notes: response.data});
      })
      .catch(error => console.log(error));
  }


  render() {
    console.log(this.state.notes);
    return (
      <div className="App">
        <NavBar />
        <Route
          exact path='/'
          render={props => <Notes {...props} notes={this.state.notes} />}   
        />
      </div>
    );
  }
}

export default App;
