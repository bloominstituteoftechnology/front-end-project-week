import React, {Component} from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class CreateNote extends Component {
    constructor() {
      super();
        this.state = {
            title: '',
            textBody: ''
        }
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    
    addNote = () => {
        axios.post  (`http://localhost:8000/api/notes/`, this.state)
        .then (res => {this.setState({notes: res.data})
        })
        .then(() => {this.props.history.push('/')})
    }

    render(){
        return (
            <Form>
                <FormGroup>
                    <Label for="title" lg={12}>Title</Label>
                    <Col lg={10}>
                        <Input 
                            bsSize="lg"
                            onChange = {this.handleInputChange}
                            placeholder = 'Title'
                            name = 'title'
                            value= {this.state.title}
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="textBody">Text Area</Label>
                    <Col lg={10}>
                    <Input 
                        bsSize="lg"
                        type="textarea"
                        onChange = {this.handleInputChange}
                        placeholder = 'Text Body'
                        name= 'textBody'
                        value= {this.state.textBody}
                    />
                    </Col>
                </FormGroup>
                <Button onClick={this.addNote}>Save</Button>
            </Form>
        );
    }
};

export default CreateNote;