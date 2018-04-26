import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SideBar from './sidebar';
import Note from './OneNote'

class Notes extends Component {
  render () {
    return(
      <div>
      {this.props.notes.map(note=> {
       return(
          <Note key={note.title} note={note}/>
       )
      })}
      </div>
    )}
  }
  

  const mapStateToProps = (state) => {
      return {
        notes: state.Notes
      };
    };
  
  export default Notes;
  