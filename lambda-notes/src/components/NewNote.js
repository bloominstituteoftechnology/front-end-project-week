import React, { Component } from 'react';
import { Form, Input, Container, Row, Col } from 'reactstrap';
import NoteButton from './NoteButton';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNote, createNote } from '../actions';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new: false,
            title: '',
            content: '',
            submitted: false,
            heading: '',
            button: ''
        }
    }

    componentDidMount() {
        if (this.props.match.path === '/new') {
            console.log("Creating a new note")
            this.setState({ 
                heading: 'Create New Note:', 
                new: true,
                button: "Save",
                // submitted: this.props.created
            })
            console.log("State before creating. New should be true...", this.state)
        } else {
            console.log("Updating an existing note")
            this.setState({
                heading: 'Edit Note:',
                title: this.props.currentNote.title,
                content: this.props.currentNote.content,
                button: "Update",
                // submitted: this.props.updated
            });
            console.log("State before updating. New should be false, title and content should be real values", this.state)
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveNote = (e) => {
        e.preventDefault();
        const newNote = {title: this.state.title, content: this.state.content};
        if (this.state.new) {
            this.props.createNote(newNote);
            console.log("After creating new:", this.state)
            this.setState({submitted: this.props.created})
        } else {
            const updatedNote = Object.assign({}, newNote, {id: this.props.currentNote.id})
            this.props.updateNote(updatedNote);
            console.log("After updating:", this.state)
            this.setState({submitted: true})
        }
        // this.setState({submitted: true})
    }

    render() { 
        return (
            this.state.submitted ? (
                <Redirect to="/"/>
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
                                <NoteButton 
                                    color="main" 
                                    value={this.state.button}/>
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
        currentNote: state.currentNote,
        created: state.created,
        updated: state.updated
    }
}
 
export default connect(mapStateToProps, { updateNote, createNote })(NewNote);