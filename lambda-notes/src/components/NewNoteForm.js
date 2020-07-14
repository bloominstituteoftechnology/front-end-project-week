import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class NewNoteForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNote = e => {
        e.preventDefault();
        let newNote = {
            title: this.state.title,
            content: this.state.content
        }
        this.props.addNote(newNote, this.props.history);
        this.setState({
            title: '',
            content: ''
        })
    }

    render() {
        return (
            <div className="note-container">
                <h3>Create New Note</h3>            
                <Form  className="note-form" onSubmit={this.addNote}>
                    <FormGroup>
                        <Input 
                            type="text"
                            name="title"
                            onChange={this.handleChange}
                            value={this.state.title}
                            placeholder="Title"
                            required
                        />  
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="textarea"
                            name="content"
                            onChange={this.handleChange}
                            value={this.state.content}
                            placeholder="Note..."
                            required
                        />
                    </FormGroup>
                    <Button className="main-button">Save</Button>          
                </Form>
            </div>
        )
    }
}

export default NewNoteForm;