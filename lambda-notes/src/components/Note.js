import React from 'react';
import NoteCard from './NoteCard';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import image from './../../src/404.jpeg'
import loading from './../loading.gif'

class Note extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            note: null,
            notes: [],
            modal: false,
            loading: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }))
    }
    componentDidMount() {
        this.setState({ loading: true })
        axios
        .get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(response => {
            
            this.setState({ 
                notes: response.data,
                loading: false
            });
            
            let activeNote = this.state.notes.find(note => note._id === this.props.match.params.id);
            activeNote._id = this.props.match.params.id;

            if (activeNote) {
                this.setState({ 
                    note: activeNote,
                    loading: false
                });
                this.props.viewNote(this.state.note._id);
            }
            else {
                this.setState({ 
                    note: null,
                    loading: false
                });
            }
            
            
        })
        .catch(err => {
            console.log(err);
            this.props.history.push(`/404`);

        })
    }

    render() {
        console.log(this.props.requestError)
        return(
            <section>

                
                <div>

                    {this.state.loading &&  <img src={loading} />}

                    { this.props.requestError === true ? 
                        <h1 className="note-title">Note wasn't found</h1>
                        :                           
                        <div>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalBody>
                                    Are you sure you want to delete your note.
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onClick={() => this.props.deleteNote(this.props.match.params.id)}>Delete <FaTrashAlt/></Button>
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>

                            <div className="action-buttons">
                                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Delete <FaTrashAlt/>
                                </Button>

                                <Link to={`/edit/${this.props.match.params.id}`}>
                                    <Button color="warning">Edit <FaEdit/></Button>
                                </Link>
                            </div>

                            <NoteCard { ...this.state.note } viewNote={this.props.viewNote} editNote={this.props.editNote} /> 

                        </div>

                    }
                </div>                        

                

            </section>
        )
    }
}

export default Note;