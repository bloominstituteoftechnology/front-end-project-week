import React, { Component } from 'react';
import './index.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import ListItems from './listitems';


const initialState = [
    {id: 1,
    title: "Note 1",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id: 2,
    title: "Note 2",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id: 3,
    title: "Note 3",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
]

class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            todos: initialState,
            todo: '',
        };
    }
handleEventChange = event => {
    this.setState({ [event.target.name]: event.target.value })
};

handleSubmit = () => {
    const todos = this.state.todos;
    const todo = {
        id: this.state.todo + todos.length,
        title: this.state.title,
        content: this.state.content,
    };
    todos.push(todo);
    this.setState({ todos: todos, todo: '' })
};

    render() {
        return (
          
            <div className="container2">    
            <h6>Create New Note:</h6>
            <ListItems todos={this.state.todos} />
            <Form className="Form1">
                <FormGroup>
                <Input name="title" onChange={this.handleEventChange} value={this.state.title} type="noteTitle" id="note-title" placeholder="Note Title" />
                </FormGroup>
                <FormGroup>
                <Input value={this.state.content} onChange={this.handleEventChange} type="noteContent" name="content" id="note-content" placeholder="Note Content" />
                </FormGroup>
                <Link to="/">
                <button onClick={this.handleSubmit} className="button3">Save</button>
                </Link>
            </Form>
        
            </div>
        )
    }
};

export default CreateNote;
