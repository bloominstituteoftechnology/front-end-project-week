import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchNotes, toggleDeleted, toggleAdded } from "../actions";
import {  NavLink } from "react-router-dom";
import Note from "./Note";


const NoteList = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  h3{
      width:100%;
      margin-left:15px;
  }
`;

class ListView extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    if(this.props.noteAdded || this.props.noteDeleted){
      setTimeout(this.props.fetchNotes(),500)
      if (this.props.noteAdded){
        this.props.toggleAdded()
      }else{this.props.toggleDeleted()}
       
      
      
    }
    return (
      
          <NoteList>
        <h3>Your Notes:</h3>
        <div className={this.props.gettingNotes ? "" : "none"}>
          <h3>Fetching Notes</h3>
        </div>
        
          {this.props.notes.map(note => (
            <NavLink exact to={`/notes/${note._id}`} key={note._id}>
              
               <Note note={note} id={note._id} />
            
            </NavLink>
          ))}
               
            
        </NoteList>

         
     
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    gettingNotes: state.gettingNotes,
    error: state.error,
    addingNote: state.addingNote,
    noteAdded: state.noteAdded,
    noteDeleted: state.noteDeleted
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes, toggleDeleted, toggleAdded}
)(ListView);
