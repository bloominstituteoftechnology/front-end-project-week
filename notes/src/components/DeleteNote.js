import React, { Component } from 'react';
import './Notes.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DeleteNote extends Component {
  deleteNote = (e) => {
      e.preventDefault();
      axios
          .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
          .then(response => {
              this.props.history.push('/');
          })
          .catch(err => console.log(err));
          this.setState({
              title: '',
              textBody: ''
          });  
  }
  render() {
    return (
      <div className="DeleteContainer">
        <div className="yesContainer">
          <Link to={`/`} onClick={this.deleteNote}>
            <button>Yes</button>
          </Link>
        </div>

        <div className="noContainer">
          <Link to={`/notes/${this.props.match.params.id}`}>
            <button>No</button>
          </Link>
        </div>

      </div>

    )
  }
}
export default DeleteNote;

