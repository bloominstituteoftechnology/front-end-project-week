import React, { Component } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';

import { Button, Input, Modal, ModalBody, ModalFooter } from 'reactstrap';


class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                _id: null,
                title: '',
                textBody: ''
            },
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

        // if (this.props.notes.length === 0 && this.props.note === null) {

            axios
                .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
                .then(response => {
                    console.log(response);
                    if (response.data.errorMessage) {
                        this.setState({ 
                            note: null,
                            notes: this.props.notes
                        });
                    }
                    else {
                        this.setState({ 
                            note: response.data,
                            notes: this.props.notes
                        });
                    }
                    

                })
                .catch(err => {
                    console.log(err);
                })
        // }
        // else {

        //     axios
        //         .get(`https://fe-notes.herokuapp.com/note/get/all`)
        //         .then(response => {
                    
        //             this.setState({
        //                 notes: response.data,
        //                 note: this.props.note
        //             })

        //         })
        //         .catch(err => {
        //             console.log(err);
        //         })
        // }

    }
    changeHandler = e => {
        this.setState({
            note: {
                ...this.state.note,
                [e.target.name]: e.target.value
            }
        })
    }
    editNoteHandler = e => {
        e.preventDefault();
        this.props.editNote(this.state.note._id, this.state.note);
    }

    render() {
        return (
            <section>

                
                    
                    {this.state.note === null ? 
                        <h2 className="error-title">Can't seem to find that note.</h2>
                        :
                    <>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

                            <ModalBody>
                                Are you sure you want to edit your note.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" type="submit" onClick={this.editNoteHandler}>Edit<FaEdit/></Button>
                                <Button color="danger" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                        <form onSubmit={this.editNoteHandler}>
                        <h1>Edit note</h1>
                            <Input
                                value={this.state.note.title}
                                onChange={this.changeHandler}
                                name="title"
                                placeholder="Title"
                                type="text"
                            />

                            <Input
                                value={this.state.note.textBody}
                                onChange={this.changeHandler}
                                name="textBody"
                                placeholder="Body"
                                type="textarea"
                            />
                            <Button color="success" onClick={this.toggle}>Edit</Button>

                        </form>
                    </>
                }
                    
                    
            </section>
        )
    }
}

export default EditForm;