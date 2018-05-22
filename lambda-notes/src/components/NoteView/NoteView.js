import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import './NoteView.css';
import Button from '../Button/Button';


class NoteView extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }

      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }


     matchedNote = this.props.notes.filter(note => {return note.id == this.props.match.params.id})[0] // [0] is the one element in the filtered Array that has a matched id
    
  render() {
    return (
        <div className="noteView-container">
            <div className="links-container">
                <Link  onClick={this.toggle} className="link" to={`/note/${this.matchedNote.id}/delete`}>delete</Link>
                <Link  onClick={this.toggle} className="link" to={`/note/${this.matchedNote.id}/edit`}>edit</Link>
            </div>
            <div className="noteView-title">{this.matchedNote.title}</div>
            <div className="noteView-body">{this.matchedNote.body}</div>

            {/*Modal*/}
            <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <div>
        <Modal className="modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
          <ModalBody className="modal-body">
             Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter className="modal-footer">
            <Button className="red-btn" text="Delete" onClick={this.toggle}></Button>{' '}
            <Button text="No" onClick={this.toggle}></Button>
          </ModalFooter>
        </Modal>
        </div>
      </div>
        </div>
    )
  }
    
} 

         
    



const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(NoteView);





// const NoteView = props => {

//     let matchedNote = props.notes.filter(note => {return note.id == props.match.params.id})[0] // [0] is the one element in the filtered Array that has a matched id
    
  
//     return (
//         <div className="noteView-container">
//             <div className="links-container">
//                 <Link className="link" to={`/note/${matchedNote.id}/delete`}>delete</Link>
//                 <Link className="link" to={`/note/${matchedNote.id}/edit`}>edit</Link>
//             </div>
//             <div className="noteView-title">{matchedNote.title}</div>
//             <div className="noteView-body">{matchedNote.body}</div>
//         </div>
//     )
// } 