import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import ListNotes from './Components/ListNotes';
import './App.css';
import Sidebar from './Components/Sidebar';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(e => { console.log(e) } )
  }

  // addToNotes = newNote => {
  //   axios
  //     .post("https://fe-notes.herokuapp.com/note/create", newNote)
  //     .then(res => this.setState({ notes: res.data }, this.props.history.push('/')))
  //     .catch(e => { console.log(e) } )
  // }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" render={(props) => <ListNotes {...props} notes={this.state.notes} /> } />
      </div>
    );
  }
}