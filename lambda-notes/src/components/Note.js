import React from 'react';
import NoteCard from './NoteCard';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

class Note extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            note: null,
            notes: [],
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        console.log('i got clicked')
        this.setState(prevState => ({
          modal: !prevState.modal
        }))
    }
    componentDidMount() {

        axios
        .get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(response => {
            
            this.setState({ 
                notes: response.data
            });
            
            let activeNote = this.state.notes.find(note => note._id === this.props.match.params.id);
            activeNote._id = this.props.match.params.id;

            this.setState({ 
                note: activeNote
                
            });
            this.props.viewNote(this.state.note._id);
            
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return(
            <section>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => this.props.deleteNote(this.props.match.params.id)}>Delete <FaTrashAlt/></Button>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
                
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Delete</Button>

               
                <Link to={`/edit/${this.props.match.params.id}`}>
                    <Button color="warning">Edit <FaEdit/></Button>
                </Link>

                <NoteCard { ...this.state.note } editNote={this.props.editNote} /> 

            </section>
        )
    }
}

export default Note;