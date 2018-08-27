import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Form, Input, Container, Row, Col } from 'reactstrap';
import NoteButton from './NoteButton';
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
            button: '',
            link: '',
            checklistString: ''
        }
    }

    componentDidMount() {
        if (this.props.match.path === '/new') {
            this.setState({ 
                heading: 'Create New Note:', 
                new: true,
                button: "Save",
                link: "/"
            })
        } else {
            this.setState({
                heading: 'Edit Note:',
                title: this.props.currentNote.title,
                content: this.props.currentNote.content,
                button: "Update",
                link: `/note/${this.props.currentNote._id}`,
                checklistString: this.props.currentNote.checklist
            });
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    saveNote = (e) => {
        e.preventDefault();
        const newChecklist = this.state.checklistString.length > 0 ? this.state.checklistString.split(',') : '';
        const newNote = {
            title: this.state.title, 
            content: this.state.content,
            checklist: newChecklist};
        if (this.state.new) {
            this.props.createNote(newNote);
            this.props.history.push("/");
            
        } else {
            const updatedNote = Object.assign({}, newNote, {_id: this.props.currentNote._id});
            console.log("Updated note: ", updatedNote)
            console.log("Note id: ", updatedNote._id);
            async function update(object) {
                object.props.updateNote(updatedNote);
            }
            update(this).then( res => {
                this.props.history.push(`/note/${this.props.currentNote._id}`);
            });
        }
    }

    render() { 
        return (
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
                            <Input
                                type="textarea"
                                name="checklistString"
                                placeholder="Add tasks separated with commas"
                                value={this.state.checklistString}
                                onChange={this.handleChange}
                                className="form-checklist"/>
                            <NoteButton 
                                color="main" 
                                value={this.state.button}/>
                            <NoteButton 
                                color="danger" 
                                value="Cancel"
                                link={this.state.link}/>
                        </Form>
                    </Col>
                </Row>
            </Container>
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
 
export default withRouter(connect(mapStateToProps, { updateNote, createNote })(NewNote));