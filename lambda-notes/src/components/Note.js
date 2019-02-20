import React from 'react';
import NoteCard from './NoteCard';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

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

                {this.state.note === null ? 
                    <h2 className="error-title">Can't seem to find that note.</h2>
                    :
                    <>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        Are you sure you want to delete your note.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => this.props.deleteNote(this.props.match.params.id)}>Delete <FaTrashAlt/></Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                    </Modal>


                    <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Delete <FaTrashAlt/></Button>

                    <Link to={`/edit/${this.props.match.params.id}`}>
                    <Button color="warning">Edit <FaEdit/></Button>
                    </Link>
                    <NoteCard { ...this.state.note } editNote={this.props.editNote} /> 
                </>
                }

            </section>
        )
    }
}

export default Note;