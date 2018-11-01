import React from 'react';
import { Link } from 'react-router-dom';



export default EditBar = props => {
    return (
    <div>
    <Link to={`/EditNoteForm/${this.props.id}`}>edit</Link>
    <Link to='/' onClick={props.deleteNote} >delete</Link>
    </div>
    );
}

/*<Link to={this.deleteNote(this.props.id)}>delete</Link>
import axios from 'axios';
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
};*/