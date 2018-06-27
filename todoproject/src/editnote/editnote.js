import React, { Component } from 'react';
import './index.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

class EditNote extends Component {
    render() {
        return (
          
            <div className="container2">    
            <h6>Edit Note:</h6>

            <Form className="Form1">
                <FormGroup>
                <Input onChange={this.props.handleEventChange} value={this.props.title} type="noteTitle" name="noteTitle" id="note-title" placeholder="Note Title" />
                </FormGroup>
                <FormGroup>
                <Input onChange={this.props.handleEventChange}  value={this.props.content} type="noteContent" name="noteContent" id="note-content" placeholder="Note Content" />
                </FormGroup>
                <Link to="/">
                <button onClick= { () => this.props.handleSubmit(this.props.match.params._id)} className="button3">Save</button>
                </Link>
            </Form>
        
            </div>
        )
    }
};

export default EditNote;