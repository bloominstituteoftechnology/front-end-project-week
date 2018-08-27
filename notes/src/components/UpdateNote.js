import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UpdateNote.css';

class UpdateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: {
                id: null,
                title: '',
                textBody: ''
            }
        }
    }

// handleTitleUpdate = event => {
//     this.setState({
//       notes: {
//         id: this.state.notes.id,
//         title: event.target.value,
//         textBody: this.state.notes.textBody
//       }
//     })
//   }
  
//   handleBodyUpdate = event => {
//     this.setState({
//       notes: {
//         id: this.state.notes.id,
//         title: this.state.notes.title,
//         textBody: event.target.value
//       }
//     })
//   }

//   handleUpdateNote = () => {
//       const id = this.props.match.params.id
//       const notes = {
//           title: this.state.notes.title,
//           textBody: this.state.notes.textBody
//       }

//       this.setState({
//             note: {
//                 id: null, 
//                 title: '', 
//                 textBody: ''
//             }})

//     axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, notes)
//     .then( response =>{
//     console.log(response)
//     this.props.history.push('/');
//   })
//     .catch(err =>console.log(err))
//   }

render() {
    console.log(this.state.notes.title)
    return(
    <div className = "edit-note-container" >
        <h2> Edit Note</h2>
    <form> 
        <input 
        type = "text" 
        name="title"
        placeholder="Title"
        value = {this.state.notes.title}
        onChange = {this.props.handleTitleUpdate}
        />
        <textarea type = "text"
        name = "textBody"
        placeholder = "Content"
        value = {this.state.notes.textBody}
        onChange = {this.props.handleBodyUpdate}
        />
        <Link to ="/notes">
        <button onClick = {this.props.handleUpdateNote}>
            Update
        </button>
        </Link>
    </form>
    </div>
    )
}

}

export default UpdateNote; 