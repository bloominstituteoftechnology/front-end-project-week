import React, { Component } from 'react';
import { Form, Input, Container, Row, Col } from 'reactstrap';
import NoteButton from './NoteButton';
// import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNote, createNote } from '../actions';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new: false,
            // note: props.note,
            title: '',
            content: '',
            submitted: false,
            heading: ''
        }
    }

    componentDidMount() {
        if (this.props.match.path === '/new') {
            console.log("creating new note")
            this.setState({ 
                heading: 'Create New Note:', 
                new: true
            })
        } else {
            console.log("updating note")
            this.setState({
                heading: 'Edit Note:',
                title: this.props.currentNote.title,
                content: this.props.currentNote.content
            });
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        //console.log("current title: ", this.state.title);
        //console.log("current content: ", this.state.content);
    }

    saveNote = (e) => {
        e.preventDefault();
        const newNote = {title: this.state.title, content: this.state.content};
        console.log(newNote.title)
        //console.log("Submitted title: ", newNote.title);
        //console.log("Submitted content: ", newNote.content);
        if (this.state.new) {
            this.props.createNote(newNote);
            this.setState({submitted: true});
            // axios
            //     .put(`http://localhost:5000/note/${updatedNote.id}`, updatedNote)
            //     .then( res => {
            //         this.setState({submitted: true});
            //     })
            //     .catch( err => {
            //         console.log(err);
            //     })
        } else {
            // axios
            //     .post('http://localhost:5000/notes', newNote)
            //     .then( res => {
            //         this.setState({title: '', content: '', submitted: true});
            //     })
            //     .catch( err => {
            //         console.log(err);
            //     })
            const updatedNote = Object.assign({}, newNote, {id: this.props.currentNote.id})
            console.log("Updated note: ", updatedNote.title);
            this.props.updateNote(updatedNote);
            this.setState({title: '', content: '', submitted: true})
        }
    }

    render() { 
        return (
            this.state.submitted ? (
                this.state.new ? (
                    <Redirect to="/"/>
                ) : (
                    <Redirect to={`/note/${this.props.currentNote.id}`}/>
                )
                // <Redirect to="/"/>
            ) : (
                <Container className="form-section">
                    <h3 className="heading">{this.state.heading}</h3>
                    <Row>
                        <Col sm="12">
                            <Form onSubmit={this.saveNote} className="form">
                                <Input 
                                    type="text" 
                                    name="title"
                                    placeholder="Note Title"
                                    value={this.state.title} 
                                    onChange={this.handleChange}
                                    className="form-title"/>
                                <Input 
                                    type="textarea" 
                                    name="content" 
                                    placeholder="Note Content"
                                    value={this.state.content}
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

const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote
    }
}
 
export default connect(mapStateToProps, { updateNote, createNote })(NewNote);