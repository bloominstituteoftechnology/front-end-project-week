import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import NoteList from './NoteList/NoteList';
import Nav from './nav';
import CreateNoteForm from './CreateNote/CreateNoteForm';
import Note from './NoteList/Note';

import { connect } from "react-redux";
import { 
  getNotes, 
  addToList, 
  updateToList, 
  deleteNote,
  startUpdate,
  resetEdit,
  setFilter,
  setSorter
 } from '../actions';

class App extends Component {

  componentDidMount(){
    this.props.getNotes();
  }

  searchFilter = ev =>{
    console.log(ev.target.value)    
    let filtered = this.props.sortedNotes.filter(note =>{
      // if(ev.target.value = undefined) return true;
        return note.title.toUpperCase().includes(ev.target.value.toUpperCase());
    })
    this.props.setFilter(filtered);
  }

  sortNotes = ev => {
    console.log(ev.target.value)
    let sortedArr = [...this.props.notes];
    let result = [];
    let sortFunc = () =>{
      switch(ev.target.value){
        case 'DEFAULT':
          return this.props.notes;
        case 'ALPHABETICAL':
          return sortedArr.sort((a,b) => {
            let textA = a.title.toUpperCase();
            let textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1: 0;
          })
        case 'NEWEST':
          return sortedArr.reverse();
     }
    }
    
    console.log(this.props.notes)
    console.log(sortedArr)
    console.log(result)
    this.props.setSorter(sortFunc());
    
  }

  render() {
    return (
      <div className="clearfix App">
        <div className='box'></div>
        <Nav />
        <div className="view">
        <Route exact path='/' render={props => (
          <NoteList 
            {...props}
            notes={this.props.filteredNotes}
            searchFilter={this.searchFilter}
            sortNotes={this.sortNotes}
          />
        )}
          
        />

        <Route path='/form' render={props => ( 
          <CreateNoteForm 
            {...props}
            addToList={this.props.addToList}
            updateToList={this.props.updateToList}
            resetEdit={this.props.resetEdit}
            editNote={this.props.editNote}
          />
        )}
          
        />

        <Route path='/card/:_id' render={props => ( 
          <Note
          {...props}
          startUpdate={this.props.startUpdate}
          deleteNote={this.props.deleteNote}
          />
        )}
          
        />
          
        </div>
      </div>
    );
  }
}

function mapStateTpProps({ axiosReducer, otherReducer }){
  return{
    notes: axiosReducer.notes,
    fetchingNotes: axiosReducer.fetchingNotes,
    editNote: otherReducer.editNote,
    filteredNotes: axiosReducer.filteredNotes,
    sortedNotes: axiosReducer.sortedNotes,
  }
}

export default withRouter(connect(
  mapStateTpProps,
  {
    getNotes, 
    addToList, 
    updateToList, 
    deleteNote,
    startUpdate,
    resetEdit,
    setFilter,
    setSorter
  }
)(App));
