import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';


class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
        this.toggle = this.toggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        const {id} = this.props.match.params
        const {title, description} = this.props.note
        console.log(title, description);
        return (
            <div className="NoteContainer">

              
                <Link className="EditLink" to={`/EditNote/${id}`}>edit</Link>  
                
            <div className="DeleteMod">

                <Link className="EditLink" to={`/DeleteNote/${id}`} onClick={this.toggle}>delete</Link>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="delete" centered>

                    <ModalBody>
                        Are you surre you want to delete this?
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Delete</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>No</Button>
                    </ModalFooter>

                </Modal>

            </div>    

                
                
                <div className="NoteView">  
                    <header className="NoteContainerTitle"> {title} </header> 
                    <p className="Description"> {description} </p> 
                  
                </div>

            
                
            </div>
        )
    }
}

export default NoteContainer;
