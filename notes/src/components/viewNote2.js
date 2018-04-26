import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { deleteNote } from '../actions.js';
import { connect } from 'react-redux';




class Here extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: [],
     text: '',
     title: '',
    }
  }
//   componentDidMount() {
//     this.getFriends();
//   }
//   getFriends = () => {
//     axios
//       .get(`http://localhost:5000/notes`)
//       .then(response => {
//         this.setState({ notes: response.data });
//       })  
//       .catch(err => {
//         console.log(err);
//       });
//     }
    render() {
        return(
            <div className="rightSide">
       <Link to={{pathname: `/editnote/${this.props.location.state.currentNote.id}`, state: { currentNote: this.props.location.state.currentNote}}}>
Edit
       </Link>
       <Link to={'/'} onClick={() => this.props.deleteNote(this.props.location.state.currentNote.id)}>Delete</Link>
<div>
<h4>{this.props.location.state.currentNote.title}</h4>
<br />
    <p>{this.props.location.state.currentNote.text}</p>
                         </div>
                         </div>
        )}
}
export default connect(null, { deleteNote })(Here);