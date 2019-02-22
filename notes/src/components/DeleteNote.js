import React, { Component } from 'react';
import './Notes.css';
//import axios from 'axios';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";

import { deleteNote } from "../Actions";
//   getNotes,
//   addNote,
//   updateNote,
//   deleteNote  
// } from "../Actions";


class DeleteNote extends Component {
  constructor (props) {
    super(props);
    this.state =
    {
      id:'id'

    }
  }

  // deleteNote = (e) => {
  //     e.preventDefault();
  //     axios
  //         .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
  //         .then(response => {
  //             this.props.history.push('/');
  //         })
  //         .catch(err => console.log(err));
  //         this.setState({
  //             title: '',
  //             textBody: ''
  //         });  
  // }

  render() {
    return (
      <div className="deleteContainer">
        <div className="confirm">
          <div className="confermMessage">Are you sure want to delete this?</div>
            <div className="yesNo"> 
                  <Link to={`/`} onClick={()=>{this.props.deleteNote(`${this.props.match.params.id}`)}}>
                    <div className="yesContainer">Yes</div>
                  </Link>
                  <Link to={`/notes/${this.props.match.params.id}`}>
                    <div className="noContainer">No</div>                 
                  </Link>
         </div>
        </div>
      </div>

    )
  }
}
export default connect (null, {deleteNote})(DeleteNote);

