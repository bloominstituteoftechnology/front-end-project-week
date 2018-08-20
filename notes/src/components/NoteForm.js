import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: '',
            tags: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addNote = event => {
        event.preventDefault();
        let tagArray = this.state.tags.split(', ');
        let newNote = {
            title: this.state.title,
            content: this.state.content,
            tags: tagArray
        }
        this.props.addNote(newNote, this.props.history);
        this.setState({
            title: '',
            content: '',
            tags: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.addNote} className="note-form">
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title} required></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="content">Note</Label>
                    <Input type="textarea" name="content" id="content" onChange={this.handleChange} value={this.state.content} required></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="tags">Tags</Label>
                    <Input type="text" name="tags" id="tags" onChange={this.handleChange} value={this.state.tags} required></Input>
                </FormGroup>
                <Button>Add</Button>
            </Form>
        )
    }
}


export default NoteForm;