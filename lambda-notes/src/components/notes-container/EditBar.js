import React from 'react';
import { Link } from 'react-router-dom';



const EditBar = props => {
    return (
    <div>
    <Link to={`/EditNoteForm/${props.id}`}>edit</Link>
    <Link to='/' onClick={props.deleteNote} onChange={props.handleInputChange} name="noteId" value={props.id} >delete</Link>
    </div>
    );
}
export default EditBar

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