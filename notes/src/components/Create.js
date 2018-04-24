import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { createNote, fetchNotes } from '../actions';
import { connect } from 'react-redux';
import './Create.css';

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
    }

    render() {
        return (
            <Container className="Create">
                <Row className="Content__heading Create__heading">
                    <Col className="Content__heading_col Create__heading__col">
                        <h4>Create New Note:</h4>
                    </Col>
                </Row>
                    <Form className="Create__form">
                        <FormGroup className="Create__form__title">
                            <Input type="title" name="title" placeholder="Note Title"
                            onChange={this.handleChange.bind(this)}/>
                        </FormGroup>
                    <FormGroup row> 
                        <Col>
                            <Input className="Create__form__text" type="textarea" name="text" placeholder="Note Text"
                            onChange={this.handleChange.bind(this)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Button color="deoco" className="Button Create__button" onClick={() => this.handleSubmit(this.state)}>
                            Save
                        </Button>
                    </FormGroup>
                    </Form>
            </Container>
        );
    }
}

export default connect(null, { createNote, fetchNotes })(Create);