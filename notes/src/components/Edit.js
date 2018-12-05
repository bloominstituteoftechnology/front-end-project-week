import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

 class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            content: this.props.content
        }
    }
     handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
     updateNote = event => {
        event.preventDefault();
        let updatedNote = {
            id: this.props.id,
            title: this.state.title,
            content: this.state.content
        }
        this.props.updateNote(updatedNote,this.props.history);
        this.setState({
            title: '',
            content: ''
        })
        window.location.reload(); 
        this.props.history.push('/'); 
        
    }
    

     render() {
        return (
            <Form onSubmit={this.updateNote} className="note-form">
                <FormGroup>
                    <Label for="title">Update Title</Label>
                    <Input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title} required></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="content"> Update Note</Label>
                    <Input type="textarea" name="content" id="content" onChange={this.handleChange} value={this.state.content} required></Input>
                </FormGroup>
                <Button color="primary">Update!</Button>
                <Button type="button" onClick={this.props.onCancel} color="danger">Cancel</Button>
            </Form>
        )
    }
}
 export default Edit;