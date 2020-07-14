import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import NewNotes from "./NewNotes.css"

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        };
    }

    handleInput = el => {
        this.setState({ [el.target.name]: el.target.value });
    };

    // handleEdit = () => {
    //     const editNote = {
    //         title: this.state.title,
    //         content: this.state.content
    //     };
    //     this.props.editNote(editNote);
    //     this.setState({
    //         editing: !this.state.editing
    //     });
    // };

    handleCreate = () => {
        const newNote = {
            title: this.state.title,
            content: this.state.content
        };
        if (this.state.title === "") {
            newNote.title = "New Note";
        }
        this.props.addNote(newNote);
        this.setState({
            title: "",
            content: ""
        });
    };

    render() {
        return (
            <Form>
                <h3>Create new note: </h3>
                <FormGroup>
                    <Input
                        type="textarea"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleInput}
                        className="input-title"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="textarea"
                        name="content"
                        placeholder="Content"
                        value={this.state.content}
                        onChange={this.handleInput}
                        className="input-content"
                    />
                </FormGroup>
                <Link to="/">
                    <Button onClick={this.handleCreate}>
                        <b>Create New Note</b>
                    </Button>
                </Link>
            </Form>
        );
    }
}
export default NewNote;