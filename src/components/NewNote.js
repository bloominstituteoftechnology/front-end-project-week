import React, { Component } from 'react';
import { Form, Input, Container, Row, Col } from 'reactstrap';
import NoteButton from './NoteButton';
import { Redirect } from 'react-router-dom';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            submitted: false,
            edit: false,                       
        }
    }   

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})       
    } 
    submitNote = (event) => {
        console.log(this.props);
        event.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,          
        };
        this.props.save(newNote);
        this.setState({
            title: '',
            content: '',
            submitted: true
        });
     }
    render() {
        
        return (
            this.state.submitted ? (
                
                    <Redirect to="/"/>            
            ) : (
                <Container className="form-section">
                    <h3 className="heading">Create New Note: </h3>
                    <Row>
                        <Col sm="12">
                            <Form onSubmit={this.submitNote} className="form">
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