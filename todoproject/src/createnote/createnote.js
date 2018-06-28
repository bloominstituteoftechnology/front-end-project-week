import React, { Component } from 'react';
import './index.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import ListItems from './listitems';


class CreateNote extends Component {

    render() {
        return (
          
            <div className="container2">    
            <h6>Create New Note:</h6>
            
            <Form className="Form1">
            
                <FormGroup>
                <Input name="title" onChange={this.props.handleEventChange} value={this.props.title} type="noteTitle" id="note-title" placeholder="Note Title" />
                </FormGroup>
                <FormGroup>
                <Input name="content" value={this.props.content} onChange={this.props.handleEventChange} type="noteContent" id="note-content" placeholder="Note Content" />
                </FormGroup>
                <Link to="/">
                <button onClick={this.props.handleSubmit} className="button3">Save</button>
                </Link>
            </Form>
        
            </div>
        )
    }
};

export default CreateNote;
