import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import NoteList from './NoteList/NoteList';
import Nav from './nav';
import CreateNoteForm from './CreateNote/CreateNoteForm';
import Note from './NoteList/Note';

import { connect } from "react-redux";
import { getNotes, addToList, updateToList, deleteNote } from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      notes: [],
      editNote: {},
    }
  }

  componentDidMount(){
    this.props.getNotes();
  }
  // getNotes = () =>{
  //   axios
  //     .get(`https://fe-notes.herokuapp.com/note/get/all`)
  //     .then(response => {
        
  //       this.setState({ 
  //         notes: response.data 
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  // addToList = (obj) => {
    
  //   console.log(this.state.notes)
  //   axios.post('https://fe-notes.herokuapp.com/note/create', obj)
  //   .then(response => {
      
  //     this.setState({
  //       notes: [ ...this.state.notes, { ...obj, id:response.data.success}]
  //     })
  //   })
  //   .catch(err => console.log(err))
  //   console.log(this.state.notes)
  // }

  // updateToList = (id, obj) => {
  //   console.log(id)
  //   axios
  //     .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, obj)
  //     .then(response => {
  //       console.log(response.data)
  //        this.setState({
  //         notes:  this.state.notes.map(note => {
  //           if(note._id === id){
  //             return response.data;
  //           }else{
  //             return note;
  //           }
  //         })
  //        });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  // deleteNote = (id) => {
  //   axios
  //     .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
  //     .then(response => {
  //       this.getNotes();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })

  // }

  startUpdate =(obj) =>{
    this.setState({
      editNote: obj
    })
  }
  resetEdit = () => {
    this.setState({
      editNote: {}
    })
  }

  render() {
    console.log(this.props.notes)
    return (
      <div className="clearfix App">
        <div className='box'></div>
        <Nav />
        <div className="view">
        <Route exact path='/' render={props => (
          <NoteList 
            {...props}
            notes={this.props.notes}
          />
        )}
          
        />

        <Route path='/form' render={props => ( 
          <CreateNoteForm 
            {...props}
            addToList={this.props.addToList}
            updateToList={this.props.updateToList}
            resetEdit={this.resetEdit}
            editNote={this.state.editNote}
          />
        )}
          
        />

        <Route path='/card/:_id' render={props => ( 
          <Note
          {...props}
          startUpdate={this.startUpdate}
          deleteNote={this.props.deleteNote}
          />
        )}
          
        />
          
        </div>
      </div>
    );
  }
}

function mapStateTpProps(state){
  return{
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    editNote: state.editNote
  }
}

export default withRouter(connect(
  mapStateTpProps,
  {
    getNotes, 
    addToList, 
    updateToList, 
    deleteNote
  }
)(App));
