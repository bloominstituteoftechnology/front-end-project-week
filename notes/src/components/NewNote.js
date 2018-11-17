import React, { Component } from 'react';

import { Form, TitleInput, BodyInput, Button } from '../Styles/Form';
import { SectionHeading } from '../Styles/GeneralStyles';

class NewNoteForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault()

        const note = {
            title: this.state.title,
            textBody: this.state.body
        };

        this.props.addNewNote(note);
        this.props.history.push('/');
     }

    render() {
        return (
            <Form>
                <SectionHeading>Create New Note:</SectionHeading>
                <form onSubmit={this.submitHandler}>
                    <TitleInput type="text" name="title" value={this.state.title} onChange={this.inputHandler} placeholder="Title"/>
                    <BodyInput type="text" name="body" value={this.state.body} onChange={this.inputHandler} placeholder="Body"/>
                    <Button type="submit">Save</Button>
                </form>
            </Form>
        )
    }
}
export default NewNoteForm;