import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { createNote } from '../actions';
import { connect } from 'react-redux';

class Create extends Component {
    state = {
        title: '',
        text: '',
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(note) {
        this.props.createNote(note);
        this.props.history.push('/');
    }

    render() {
        return (
            <Container className="Create">
                <Row className="Create__header">
                    <Col>
                        <h4 className="Content__heading">Create New Note:</h4>
                    </Col>
                </Row>
                    <Form>
                        <FormGroup>
                            <Input type="title" name="title" id="NoteTitle" placeholder="Note Title"
                            onChange={this.handleChange.bind(this)}/>
                        </FormGroup>
                    <FormGroup row> 
                        <Col>
                            <Input type="textarea" name="text" id="NoteText" placeholder="Note Text"
                            onChange={this.handleChange.bind(this)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={() => this.handleSubmit(this.state)}>
                            Save
                        </Button>
                    </FormGroup>
                    </Form>
            </Container>
        );
    }
}

export default connect(null, { createNote })(Create);