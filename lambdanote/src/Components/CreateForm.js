import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default class CreateForm extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            title: '',
            text: ''
        }    
    }

    handdleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    createNewInput = (event)=> {
        event.preventDefault();
        const notes = this.state.notes;
        // const newNotes = { 
        //     title: this.state.title, 
        //     text: this.state.text}
        // notes.push(newNotes);
        this.setState({ notes, title: '', text: ''})
    };

    render() {
        return (
            <div>
                <h4>Create New Note</h4>
                <div className='create-form'>
                    <Form>
                        <FormGroup>
                            <Input 
                                type='text' 
                                name='title' 
                                placeholder='Note Title'
                                value={this.state.title}
                                onChange={this.handdleInputChange}
                                />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                type='textarea' 
                                name='text' 
                                placeholder='Note Content' 
                                value={this.state.text}
                                onChange={this.handdleInputChange}
                                /> 
                        </FormGroup>
                        <Button onClick={this.createNewInput} className='content-btn'>
                        Save
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
