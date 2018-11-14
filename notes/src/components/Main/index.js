import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import ListView from '../ListView';
import CreateNote from '../CreateNote';
import Navigation from '../Navigation';
import Note from '../Note';
import EditNote from '../EditNote';

import './main.css';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      fetching: false,
      fetched: false,
      creatingNote: false,
      id: null,
      error: null
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
         .catch(err => {
           this.setState({
             error: err
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
                .catch(err => {
           this.setState({
             error: err
          })
        })
  }

  createNote = (note) => {
    this.setState({ creatingNote: true, fetched:false })

    axios.post('https://fe-notes.herokuapp.com/note/create', note)
         .then(res => this.setState({
           creatingNote: false,
           fetched: true
         }))
         .catch(err => {
           this.setState({
             error: err
          })
        })
  }

  updateNote = (note) => {
    // this.setState({updatingNote: true, fetched:false})

    axios.put(`https://fe-notes.herokuapp.com/note/edit/${note.id}`, {...note})
         .then(res => console.log(res))
         .catch(err => {
           this.setState({
             error: err
          })
        })
  }

  render() {
    return (
      <section className='main-container'>

        <Navigation getNotes={this.getNotes}></Navigation>

        <Route path='/' exact render={(props) => <ListView notes={this.state.notes} />}/>

        <Route  exact path='/note/create/'  render={(props) => <CreateNote
          createNote={this.createNote}
          creatingNote={this.state.creatingNote}/>} />

        <Route path='/:id' exact render={(props) => <Note {...props}/>}/>

        <Route path='/edit/:id' exact render={(props) => <EditNote {...props} update={this.updateNote}/>}/>
      </section>
    );
  }
}

export default Main;
