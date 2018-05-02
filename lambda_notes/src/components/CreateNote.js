// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addNote } from '../actions';
// import SideBar from '../components/SideBar';
// import '../styles/CreateNote.css';

// class CreateNote extends Component {
//   state = {
//     title: '',
//     categories: '',
//     body: '',
//   };

//   handleFormChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   addNote = e => {
//     const theNote = Object.assign({}, this.state);
//     this.props.addNote(theNote);
//     this.props.history.push('/');
//     this.setState({
//       title: '',
//       body: '',
//     });
//   };

//   render() {
//     return (
//       <div className="container">
//         <SideBar />
//         <div className="formBody">
//           <div className="formHeader">Create New Note:</div>
//           <div className="formFields">
//             <form type="submit">
//               <div className="titleContainer">
//                 <input
//                   type="text"
//                   className="titleField"
//                   placeholder="Title"
//                   name="title"
//                   onChange={this.handleFormChange}
//                   value={this.state.title}
//                 />
//               </div>
//               <div className="bodyContainer">
//                 <textarea
//                   type="text"
//                   className="bodyField"
//                   placeholder="Content"
//                   name="body"
//                   onChange={this.handleFormChange}
//                   value={this.state.body}
//                 />
//               </div>
//                 <input 
//                 type="submit" value="Save" className="submitButton" onClick={this.addNote} />
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(null, { addNote })(CreateNote);