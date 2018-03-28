import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Modal: false,
        }
        this.toggle = this.toggleDelete.bind(this);
    }

    toggleDelete() {
        this.setState({
            Modal: !this.state.Modal
        })
    }

    render() {
        const {id} = this.props.match.params
        const {title, description} = this.props.note
        console.log(title, description);
        return (
            <div className="NoteContainer">

              
                  <Link to={`/notes/${id}/EditNote`}>edit</Link>  
                

                <div className="DeleteNoteLink" onClick={this.toggle}>
                    delete
                </div>

                <Modal 
                    isOpen={this.state.modal} 
                    toggle={this.toggle}
                    className="delete">

                        <ModalHeader toggle={this.toggle}>Are you surre you want to delete this?</ModalHeader>

                        <ModalBody>
                            <Button>Delete</Button>
                            <Button>No</Button>
                        </ModalBody>

                </Modal>
                
                <div className="NoteView">  
                    <header className="NoteContainerTitle"> {title} </header> 
                    <p className="Description"> {description} </p> 
                  
                </div>

            
                
            </div>
        )
    }
}

export default NoteContainer;
