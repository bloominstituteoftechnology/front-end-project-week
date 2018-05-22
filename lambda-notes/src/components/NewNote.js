import React, { Component } from 'react';
import { Form, Input, Container, Row, Col } from 'reactstrap';
import NoteButton from './NoteButton';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: props.edit,
            note: props.note,
            title: props.title,
            content: props.content,
            submitted: false
        }
    }

    componentDidMount() {
        if (!this.state.edit) {
            console.log("creating new note")
            this.setState({title: '', content: ''})
        } else {
            console.log("updating note")
            // this.setState({title: this.state.note.title, content: this.state.note.content})
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log("current title: ", this.state.title);
        console.log("current content: ", this.state.content);
    }

    saveNote = (e) => {
        e.preventDefault();
        const newNote = {title: this.state.title, content: this.state.content};
        console.log("Submitted title: ", newNote.title);
        console.log("Submitted content: ", newNote.content);
        if (this.state.edit) {
            const updatedNote = Object.assign({}, newNote, {id: this.state.note.id})
            console.log(this.props);
            axios
                .put(`http://localhost:5000/note/${updatedNote.id}`, updatedNote)
                .then( res => {
                    this.setState({submitted: true});
                })
                .catch( err => {
                    console.log(err);
                })
        } else {
            axios
                .post('http://localhost:5000/notes', newNote)
                .then( res => {
                    this.setState({title: '', content: '', submitted: true});
                })
                .catch( err => {
                    console.log(err);
                })
        }
    }

    render() { 
        return (
            this.state.submitted ? (
                // this.state.edit ? (
                //     <Redirect to={`/note/${this.state.note.id}`}/>
                // ) : (
                //     <Redirect to="/"/>
                // )
                <Redirect to="/"/>
            ) : (
                <Container className="form-section">
                    <h3 className="heading">Create New Note: </h3>
                    <Row>
                        <Col sm="12">
                            <Form onSubmit={this.saveNote} className="form">
                                <Input 
                                    type="text" 
                                    name="title"
                                    placeholder="Note Title"
                                    defaultValue={this.state.title} 
                                    onChange={this.handleChange}
                                    className="form-title"/>
                                <Input 
                                    type="textarea" 
                                    name="content" 
                                    placeholder="Note Content"
                                    defaultValue={this.state.content}
                                    onChange={this.handleChange}
                                    className="form-content"/>
                                <NoteButton color="main" value="Save"/>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )
        )
    }
}
 
export default NewNote;