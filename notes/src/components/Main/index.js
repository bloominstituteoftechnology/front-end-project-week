import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import ListView from '../ListView';
import CreateNote from '../CreateNote';
import Navigation from '../Navigation';

import './main.css';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      fetching: false,
      fetched: false,
      creatingNote: false
    }
  }

  componentDidMount() {

      // set State to fetching if no notes list is present
      this.setState({ fetching: true })

    // make an API call to get notes
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
         .then(res => {
           this.setState({
             notes: res.data,
             fetching: false,
             fetched: true
           })
         })
  }

  getNotes = () => {
    this.setState({fetching: true})
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
                .then(res => this.setState({
                  notes: res.data,
                  fetched: true,
                  fetching: false
                }))
  }

  createNote = (note) => {
    this.setState({ creatingNote: true, fetched:false })

    axios.post('https://fe-notes.herokuapp.com/note/create', note)
         .then(res => this.setState({
           creatingNote: false,
           fetched: true
         }))
  }

  render() {
    return (
      <section className='main-container'>

        <Navigation getNotes={this.getNotes}></Navigation>

        <Route path='/' exact render={(props) => <ListView notes={this.state.notes} />}/>

        <Route path='/note/create' exact render={(props) => <CreateNote
          createNote={this.createNote}
          creatingNote={this.state.creatingNote}/>} />
      </section>
    );
  }
}

export default Main;
