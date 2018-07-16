// import React, { Component } from 'react';
// import axios from 'axios';
// import Sidebar from './Sidebar';

// const URL = "http://localhost:3000/"


// class CreateNote extends Component {
// constructor(props) {
//     super(props)
//     this.state = {
//         title: '',
//         body: '',
//     }
// }

// createNote = e => {
//     e.preventDefault();
//     const newNote = {
//         title: this.state.title,
//         body: this.state.body
//     };
// axios
// .post(URL, newNote)
// .then(response => {
//     console.log("POST RESPONSE", response);
//       this.props.handleSetData(response.data);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//     this.setState({
//         title: '',
//         body: ''
// });
// }

// handleInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

// render() {
//     return (
//         <div className="NoteForm">
//         <Sidebar />
//         <h1>Create New Note:</h1>
//         <input
//             onChange={this.handleInputChange}
//             placeholder="Note Title"
//             value={this.state.title}
//             name="title"
//           />
//           <input
//             onChange={this.handleInputChange}
//             placeholder="Note Content"
//             value={this.state.body}
//             name="body"
//           />
//           <button>Save</button>
//           </div>
//     )
// }
// }

// export default CreateNote;