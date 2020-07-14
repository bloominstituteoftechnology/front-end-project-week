import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import './DeleteNote.css';

class DeleteNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal: false
         }

         this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }

    // deleteNote = () => {
    //     const notes = this.props.notes;
    //     const id = this.props.match.params.id
    //     console.log("NOTES:", notes)
    //     notes.splice(id, 1);
    // }

    render() { 
        return ( 
            <div>
                <Button className="delete-link" 
                    style={{
                        backgroundColor: 'transparent', 
                        border: 'none', 
                        color:  '#2BC1C4', 
                        padding: '5px',
                        margin: '5px',
                        textAlign: 'center' 
                    }} 
                    onClick={this.toggle}>
                    Delete
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
                <ModalFooter>
                <Link to="/" >
                    <Button  
                        style={{
                            backgroundColor: '#e60000'
                        }} 
                        onClick={this.toggle}
                    >
                        Do Something
                    </Button>
                </Link>
                    <Button style={{backgroundColor: 'aqua'}}  onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
         )
    }
}
 
export default DeleteNote;