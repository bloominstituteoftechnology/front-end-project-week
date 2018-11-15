import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

import ListView from '../ListView';
import CreateNote from '../CreateNote';
import Navigation from '../Navigation';
import Note from '../Note';
import EditNote from '../EditNote';
import DeleteModal from '../DeleteModal';

import './main.css';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      fetching: false,
      fetched: false,
      creatingNote: false,
      updating: false,
      id: null,
      error: null,
      deleted: false
    }
  }

  componentDidMount() {

      // set State to fetching if no notes list is present
      this.setState({ fetching: true, deleted: false })

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
                  fetching: false,
                  deleting: false,
                  deleted: false
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
        setTimeout(() => {this.setState({
          creatingNote: false,
          fetched: true
        })},1000);
  }

  updateNote = (note) => {
    this.setState({updating: true, fetched:false})

    axios.put(`https://fe-notes.herokuapp.com/note/edit/${note.id}`, {...note})
         .then(res => {
           this.setState({updating: false, fetched: true})
         })
         .catch(err => {
           this.setState({
             error: err
          })
        })

    setTimeout(() => {
      this.setState({updating: false, fetched: true});
    },2000)

  }

  deleteModal = (id) => {
    this.setState({deleting: true, deleted:false, id: id})
  }
  delete = () => {
    const id = this.state.id
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
         .then(res => {
          this.getNotes();
          this.setState({deleting: false, deleted:true})
         })
         .catch(err => {
           this.setState({error: err})
         })
  }
  closeModal = () => {
    this.setState({deleting:false})
  }

  render() {
    return (
      <section className='main-container'>

        <Navigation getNotes={this.getNotes}></Navigation>

        <Route path='/' exact render={(props) => <ListView notes={this.state.notes} />}/>

        <Route  exact path='/note/create/'  render={(props) => <CreateNote
          createNote={this.createNote}
          creatingNote={this.state.creatingNote}/>} />

        <Route path='/:id' exact render={(props) => <Note {...props}
          delete={this.deleteModal}
          deleting={this.state.deleting}/>}/>

        <Route path='/edit/:id' exact render={(props) => <EditNote {...props} update={this.updateNote}
        updating={this.state.updating}/>}/>

        {this.state.deleting ? <DeleteModal delete={this.delete} close={this.closeModal} /> : null}

        {this.state.deleted ? <Redirect exact to='/' /> : null}
      </section>
    );
  }
}

export default Main;
