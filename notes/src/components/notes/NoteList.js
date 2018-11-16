import React, { Component } from "react";
import NoteCard from "./NoteCard";
import axios from 'axios';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }
  componentDidMount() {
    axios.get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  render() {
    return (
      <div className="notelist">
      <h2>Your Notes:</h2>
      {this.state.notes.length < 1 ? <h3>There are no notes!</h3> : this.state.notes.map(note => 
         <NoteCard 
            key={note._id}
            note={note}
         />)
      }
   </div>
    );
  }
}

export default NoteList;
