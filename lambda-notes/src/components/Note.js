import React from 'react';
import NoteCard from './NoteCard';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import loading from './../loading.gif'

class Note extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            note: null,
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
        .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
        .then(response => {
           
            if (response.data.errorMessage) {
                this.setState({ loading: false })
                this.props.history.push(`/404`);
            }
            else {
                this.setState({ 
                    note: response.data,
                    loading: false
                });

            this.props.history.push(`/note/${this.props.match.params.id}`);
            }
            
        })
        .catch(err => {
            console.log(err);
            this.setState({
                loading: false
            })

        })
    }

    render() {
        return(
            <section>
                
                <div>

                    {this.state.loading &&  <img alt="Loading gif" src={loading} />}

                    { this.props.requestError === true ? 
                        <h1 className="note-title">Note wasn't found</h1>
                        :                           
                        <div className="note-wrapper">
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
                                <Button color="danger" size="md" onClick={this.toggle}>{this.props.buttonLabel}Delete <FaTrashAlt/>
                                </Button>

                                <Link to={`/edit/${this.props.match.params.id}`}>
                                    <Button size="md" color="warning">Edit <FaEdit/></Button>
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