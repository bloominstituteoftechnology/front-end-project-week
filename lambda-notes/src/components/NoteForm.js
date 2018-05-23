import React, { Component } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';

export default class NoteForm extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            title: '',
            content: ''
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createNewNote = e => {
        e.preventDefault();
        const notes = this.state.notes;
        this.setState({ notes, title: '', content: '' })
    };

    render() {
        return (
            <div>
                <h4>Create New Note</h4>
                    <div className='note-form'>
                        <Form>
                            <FormGroup>
                                <Input
                                    type='text'
                                    name='title'
                                    placeholder='Note Title'
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type='text'
                                    name='content'
                                    placeholder='Note Content'
                                    value={this.state.content}
                                    onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <Button onClick={this.createNewNote} className='add-note-btn'>
                                Save
                            </Button>
                        </Form>
                    </div>
            </div>
        )
    }
}