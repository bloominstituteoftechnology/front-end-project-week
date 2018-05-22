import React, { Component } from 'react';
import { Form, Input, Container, Row, Col } from 'reactstrap';
import NoteButton from './NoteButton';
import { Redirect } from 'react-router-dom';
import Notes from './Notes';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
             edit: props.edit,
             note: props.note,
            title: '',
            content: '',
            submitted: false,
            id: ''
        }
    }

  
    componentDidMount() {
        this.setState({id: Date.now()});
    }   

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
       
    } 

    render() {
        const { title, content } = this.state;
        const newNote = {title, content};
        return (
            this.state.submitted ? (
                <Redirect to="/"/>
            ) : (
                <Container className="form-section">
                    <h3 className="heading">Create New Note: </h3>
                    <Row>
                        <Col sm="12">
                            <Form onSubmit={() => {this.props.saveNote(newNote)}} className="form">
                                <Input 
                                    type="text" 
                                    name="title"
                                    placeholder="Note Title"
                                    defaultValue={this.state.content} 
                                    onChange={this.handleChange}
                                    className="form-title"/>
                                <Input 
                                    type="textarea" 
                                    name="content" 
                                    placeholder="Note Content"
                                    defaultValue={this.state.title}
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