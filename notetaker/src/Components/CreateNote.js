import React, { Component } from 'react';
import { addNote } from '../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, Input, FormText, Label, FormGroup } from 'reactstrap';

class CreateNote extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleAdd = () => {
        this.props.addNote(this.state);
        this.setState({
            title: '',
            content: ''
        })
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="title"
                            onChange={this.handleChange}
                            value={this.state.title}
                            name="title"
                            id="title"
                            placeholder='Title'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Content</Label>
                        <Input type="content"
                            onChange={this.handleChange}
                            value={this.state.content}
                            name="content"
                            id="content"
                            placeholder='Content'
                        />
                    </FormGroup>
                    <Link exact='true' to='/'>
                        <Button type='submit'
                            onClick={this.handleAdd}>Submit
                        </Button>
                    </ Link>
                </Form>
            </div>
        )
    }
}

export default connect(null, { addNote })(CreateNote);