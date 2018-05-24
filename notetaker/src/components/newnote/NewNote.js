import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button, Input, InputGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import './newnote.css';
import { Redirect } from 'react-router';

export default class NewNote extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            newNoteTitle: '',
            newNoteBody: '',
            newNoteID: Date(),
            notes: [],
            redirect: false
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.state.notes.push({
            title: this.state.newNoteTitle, 
            body: this.state.newNoteBody, 
            id: this.state.newNoteID
        });
        console.log(this.state.notes);
        this.props.handleSubmit(this.state.notes);
        this.setState({
            redirect: true
        })
    }

  render() {
    if (this.state.redirect === true) return <Redirect to="/" />;   
    return ( 
      <div>
        <Container className="container">
            <Row className="border">
                <Col xs="3" className="sidebar">
                    <h1 className="mt-3 text-left heading">Lambda Notes</h1>
                    <Link to="/">
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">View Your Notes</button>
                    </Link>
                    <Link to="/">
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">+ Create New Note</button>
                    </Link>
                </Col>
                <Col xs="9" className="main">
                    <Row className="ml-3 mt-5 pt-4 mb-4">
                        <h4 className="text-left heading">Create New Note:</h4>
                    </Row>
                    <Row className="mb-4">
                        <Col xs="7" className="ml-3">
                            <Input placeholder="Note Title" 
                            className="note-title-input" 
                            onChange={this.handleChange}
                            value={this.state.newNoteTitle} 
                            name="newNoteTitle" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" className="ml-3 pr-5">
                            <textarea placeholder="Note Content" 
                            className="rounded note-content-input" 
                            onChange={this.handleChange} 
                            value={this.state.newNoteBody} 
                            name="newNoteBody"></textarea>
                        </Col>
                        <Col xs="4" className="ml-3">
                            {/*<form onSubmit={this.submitHandler}>*/}
                                <button
                                type="submit"
                                class="button mt-4 btn btn-lg btn-block rounded-0" 
                                onClick={this.submitHandler}> 
                                Save</button>
                            {/*</form>*/}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
