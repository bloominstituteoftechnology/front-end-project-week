import React, { Component } from "react";
import axios from 'axios';
import Notes from "./Notes.js";

export default class NoteView extends Component {
      
    state ={
     note: null
 };

   componentDidMount(){
       const id = this.props.match.params.id;
        axios
          .get(`http://localhost:5000/notes/${id}`)
          .then(response =>
            this.setState(() => ({ note: response.data }))
          )
          .catch(error => {
            console.error(error);
          });
   }
  
render() {
    if(!this.state.note) {
      return <div>Loading note information...</div>
    } 
  
    return <div>
        <ul className="note-grid">
          {this.state.notes.map(note => {
            return <div className="note-box">
                <Notes key={note.id} note={note} />
              </div>;
          })}
      
        </ul>
      </div>;
  }

 


};