import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { deleteNote } from '../actions.js';
import { connect } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';




class Here extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: [],
     text: '',
     title: '',
     modal: false
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
toggleModal = () => {
    this.setState({
        modal: !this.state.modal
    });
}



    render() {
        return(
            <div className="col-9 float-right pt-5 text-left">
            <div className="col-12 d-flex flex-row justify-content-end">
       <Link to={{pathname: `/editnote/${this.props.location.state.currentNote.id}`, state: { currentNote: this.props.location.state.currentNote}}}>
       <button >Edit</button>
       </Link>
       <button onClick={() => this.toggleModal()}>Delete</button>
       </div>
       {this.state.modal ? <Modal isOpen= {this.state.modal}>
       <ModalBody>
           Do you wish to delete this note?
           <div className="d-flex mt-3">
           <Link to='/' onClick={() => this.props.deleteNote(this.props.location.state.currentNote.id)}> 
           <button className="redButton" > Yes </button></Link>
            <button className="ml-3 tealButton" onClick={() => this.toggleModal()}> No</button>
            </div>
            </ModalBody>
            </Modal> : null}
<div >
<h3>{this.props.location.state.currentNote.title}</h3>
<br />
    <p>{this.props.location.state.currentNote.text}</p>
                         </div>
                         </div>
        )}
}
export default connect(null, { deleteNote })(Here);
// onClick={() => this.props.deleteNote(this.props.location.state.currentNote.id)}