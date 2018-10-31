import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class EditBar extends Component {
    constructor(props) {
        super(props);
     
    }

 deleteNote = event => {
        axios
          .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.id}`)
          .then(response => {
            window.location.reload()
          })
          .catch(error => {
            console.error(error);
          });
      };

    render(){

    return (
    <div>
    <Link to={`/EditNoteForm/${this.props.id}`}>edit</Link>
    <Link to='/' onClick={this.deleteNote} >delete</Link>
    </div>
    );
}
}
//<Link to={this.deleteNote(this.props.id)}>delete</Link>