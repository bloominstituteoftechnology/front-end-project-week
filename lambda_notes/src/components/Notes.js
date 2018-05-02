import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SideBar from './sidebar';
import Note from './OneNote'

class Notes extends Component {
  constructor(props){
    super(props)
    this.state
  };
  

  render () {
    console.log('notes')
    let lambdaNotes; 
        if (this.props.notes) {
      lambdaNotes = this.props.notes.map(note=> {
       return(
          <Note key={note.id} note={note}/>
       );
      })
      return (
        <div className="notes-div">
        {lambdaNotes}
        </div>

      
    )}
  }
}
  

  // const mapStateToProps = (state) => {
  //     return {
  //       notes: state.notes,
  //     };
  //   };
    export default Notes;
  