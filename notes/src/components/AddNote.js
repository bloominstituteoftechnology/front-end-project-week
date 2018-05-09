import React, { Component } from 'react';
import { FormControl, Form, Button, Col } from 'react-bootstrap';
import './AddNote.css';
import { Redirect } from 'react-router';


class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNote(this.state);
        this.setState({title: "", content: ""});
        <Redirect to='/view' />
    }

    render() {
        return (
            <Col xs={12} md={8} class="vspace1em">
                <h2>Create New Note</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormControl name="name" type="text" placeholder="Note Title"
                        className="marginBottom" onChange={this.handleChange} />
                    <FormControl name="content" componentClass="textarea" placeholder="Note Content"
                        className="marginBottom" onChange={this.handleChange} />
                    <Button type="submit">Save</Button>
                </Form>
            </Col>
        )
    }
}

export default AddNote;