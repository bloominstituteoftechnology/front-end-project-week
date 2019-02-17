import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import NewNote from './components/NewNote';
import NoteList from './components/NoteList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      note: [],
    }
  }

  componentDidMount() {
    console.log('mounty')

    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({
          title: response.title,
          textBpdy: response.textBody,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <section className = 'appBody'>
          <Menu />

          <Route exact path = '/' render = {props => <NoteList {...props} notes={this.state.note} />} />

          <Route path = '/new-note' component = {NewNote} />
          </section>
      </div>
    );
  }
}

export default App;
