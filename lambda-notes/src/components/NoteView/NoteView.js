import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

import { deleteNote } from '../../actions';
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


    matchedNote = this.props.notes.filter(note => {return note.id == this.props.match.params.id})[0] 
    // [0] is the one element in the filtered Array that has the matched id

    //   handleRemove = () => {
    //     this.props.deleteNote(this.matchedNote.id)
    //        return window.location.href = "/"
    //     }
      


    render() {
     
        return (
            <div className="noteView-container">

                <div className="links-container">
                    <Link 
                        onClick={this.toggle} 
                        className="link" 
                        to={`/note/${this.matchedNote.id}`}
                    >delete
                    </Link>

                    <Link 
                        className="link" 
                        to={`/note/edit/${this.matchedNote.id}`}
                    >edit
                    </Link>
                </div>

                <div className="noteView-title">{this.matchedNote.title}</div>

                <div className="noteView-body">{this.matchedNote.body}</div>

                {/*MODAL*/}
                <div>
                    <div>
                        <Modal 
                            className="modal" 
                            isOpen={this.state.modal} 
                            toggle={this.toggle} 
                            className={this.props.className}
                        >
                        
                            <ModalBody className="modal-body">
                            Are you sure you want to delete this?
                            </ModalBody>

                            <ModalFooter className="modal-footer">

                                <Link 
                                    style={{textDecoration: "none"}} 
                                    to="/">
                                    
                                    <Button style={{width: "211px"}} className="delete-btn" 
                                    text="Delete" 
                                    onClick={() => this.props.deleteNote(this.matchedNote.id)}
                                >
                                    </Button>
                                {' '}</Link>

                                <Link 
                                    style={{textDecoration: "none"}} 
                                    to={`/note/${this.matchedNote.id}`}
                                >
                                    <Button className="cancel-btn" style={{width: "211px"}} text="Cancel" onClick={this.toggle}></Button>
                                </Link>

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

export default connect(mapStateToProps, { deleteNote })(NoteView);




