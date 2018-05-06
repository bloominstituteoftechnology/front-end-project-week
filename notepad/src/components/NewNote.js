import React, { Component } from 'react';
import { createNote } from '../actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



//add push to refresh state after the note is added. push it to

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.createNote(this.state);
        this.setState({
            title: '',
            content: ''        
        });
        this.props.history.push(`/notes/`)
    }

    render() {
        return (
            <div>
            <h5>Create New Note:</h5>
            <Form>
                <FormGroup row>
                    <Col sm={10}>
                        <Input 
                            type="text" 
                            name="title" 
                            placeholder="Title"
                            onChange={this.handleChange}
                            value={this.state.title} 
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={10}>
                        <Input rows="15"
                            type="textarea"
                            placeholder="Your Dreams Begin Here"
                            onChange={this.handleChange}
                            value={this.state.content}
                            name="content" 
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm="1">
                        <Button color="info"onClick={this.handleSubmit}>Save</Button>
                    </Col>
                </FormGroup>

                </Form>


            </div>

        )
    }
}



export default connect(null, { createNote })(NewNote);