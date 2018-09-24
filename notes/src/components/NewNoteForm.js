import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './UpdateNote.js'
import './NewNoteForm.css';


class NewNoteForm extends Component {
    constructor(props) {
        super(props);
        console.log('logging props in NewNoteForm', this.props)
        this.state = { 
            id: null,    
            title: '',
            textBody: ''
        };
    }

componentDidMount() {
    this.setState({
        notes: this.props.notes,
        title: '', 
        textBody: ''
    });
}
  
// handleAddNote = event => {
//     event.preventDefault();
//     // this.setState({loading: true});
//       const note = {
//           title: this.state.title,
//           textBody: this.state.textBody
//       };
      
//     // this.setState({
//     //     id: null,
//     //       notes: {
//     //           id: null, 
//     //           title: '', 
//     //           textBody: ''
//     //       }})

//       axios
//       .post("https://killer-notes.herokuapp.com/note/create", note)
//       .then(response => {
//           console.log('logging response in post method', response);
//           this.props.handleSubmit(response.data)
//           this.setState({
//             title: '',
//             textBody: ''
//         })
//         //   console.log('logging state in post attempt',this.state)
//         //   console.log('logging history', this.props.history)
//         //   this.props.history.push('/', this.state);
//       })
//       .catch(err =>
//     console.log(err));

//     this.setState({
//         title: '',
//         textBody: ''
//     });
//   }

//   handleChange = event => {
//     this.setState({ [event.target.name]: event.target.value})
//   };
  

    render(){
    return (
        <div className = "new-note-container">
            <form onSubmit = {this.handleAddNote}>
                <h2> Create New Note:
                </h2>
                <input 
                onChange = {this.handleChange} 
                value = {this.state.title}
                className = "note-title-input"
                type="text"
                placeholder="Note Title" 
                />
                <textarea
                onChange = {this.handleChange} 
                value = {this.state.textBody}
                className = "note-content-input"
                type = "text"
                placeholder = "Note Content"
                />
                <Link to="/notes"> 
                <button onClick = {this.handleAddNote}> 
                   Add to Note List     
                </button> 
                </Link>
            </form> 
        </div> 
    )
}
}

export default NewNoteForm;