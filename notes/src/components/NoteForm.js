import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

 class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }
    
     handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addNote = event => {
        event.preventDefault();
        let newNote = {
            title: this.state.title,
            content: this.state.content
        }
        this.props.addNote(newNote);
        this.setState({
            title: '',
            content: ''
        },  () => this.props.history.push('/'))
        
    }


        render() {
        console.log(this.props);
        return (
              <Form onSubmit={this.addNote} className="note-form">
                <FormGroup>
                    <Label for="title" class="mytext">Create New Note:</Label>
                    <Input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title} required></Input>
                </FormGroup>
                <FormGroup>
                    <Input type="textarea" name="content" id="content" onChange={this.handleChange} value={this.state.content} required ></Input>
                </FormGroup>
                <Button>Add</Button>
            </Form>
        )
    }
}

export default NoteForm;