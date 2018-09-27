// import React, { Component, Fragment } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import Note from './Note';


// export default class DeleteNote extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       _id: this.props.match.params.id,
//       modal: false
//     };
//   }

//   deleteNote = e => {
//     e.preventDefault();
//     axios
//     .delete(`https://killer-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
//     .then(() => {this.props.history.push('/')
//     })
//     .catch(err => {
//       console.error(err);          
//     });
//   } 

//   // toggleModal = () => {
//   //   this.setState({ modal: !this.state.modal})
//   // }

//   noDelete = () => {
//     this.props.history.push(`/notes/${this.props.match.params.id}`)
//   }

//   render() {
//     return(
      // <Fragment>
      //   <div className='modal'>
      //     <p>Are you sure you want to delete this?</p>
      //     <button className='delete' onClick={this.deleteNote}>Delete</button>
      //     <button className='no' onClick={this.noDelete}>No</button>
      //   </div>
      //   <Note />
      // </Fragment>
//     );
//   }
// }