import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './note.css'

class NoteView extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            modal: false,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    deleteNoteHandler = (id) => {
        this.props.deleteNote(id);
        this.toggleModal();
        this.props.history.push('/')
    }

    toggleModal = () => {
        this.setState({
          modal: !this.state.modal
        })
      }
    
    render() {
        return (
            <div className="noteViewContainer">
                
                {this.props.notes.map(note => {
                    if (this.props.match.params.id === `${note.id}`) {
                        return (
                            <div>
                                <div className="noteViewNav">
                                    <Link to={`/note/edit/${note.id}`}>
                                    <span className="noteButton" style={{cursor: 'pointer'}}>Edit</span>
                                    </Link>
                                    <span className="noteButton" style={{cursor: 'pointer'}} onClick={this.toggleModal}>Delete</span>
                                </div>
                                <h2 className="noteViewTitle">{note.title}</h2>
                                <p className="noteViewText">{note.content}</p>

                                <Modal 
                                    isOpen={this.state.modal} 
                                    toggle={this.toggleModal} 
                                    centered={true}
                                    size='sm' 
                                    >
                                    <ModalHeader toggle={this.toggleModal}>Modal Header</ModalHeader>
                                    <ModalBody>Are you sure you want to delete?</ModalBody>
                                    <ModalFooter>
                                            <Button color='danger' onClick={() => this.deleteNoteHandler(note.id)} >Delete</Button>
                                        <Button color="primary" onClick={this.toggleModal}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        )
                    }
                })}

                
            </div>
        )
    }
};

export default NoteView;

// () => this.deleteNoteHandler(note._id)