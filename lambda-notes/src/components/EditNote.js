import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            content: this.props.content
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    updateNote = e => {
        e.preventDefault();
        let updatedNote = {
            id: this.props.id,
            title: this.state.title,
            content: this.state.content
        }
        this.props.updateNote(updatedNote);
        this.props.onCancel();
    }

    render() {
        return (
            <Form onSubmit={this.updateNote}>
                <FormGroup>
                    <Input
                        type="text"
                        name="title"
                        id="title"
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
                        id="content"
                        onChange={this.handleChange} 
                        value={this.state.content}
                        placeholder="Note..."
                        required
                    />
                </FormGroup>                
                <Button className="main-button">Update</Button>
                <Button color="danger" onClick={this.props.onCancel}>Cancel</Button>
            </Form>
        )
    }
}
export default EditNote;