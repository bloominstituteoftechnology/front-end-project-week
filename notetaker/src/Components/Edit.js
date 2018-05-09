import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, Input, FormText, Label, FormGroup } from 'reactstrap';

import "../App.css";
import { editNote } from '../Actions';
import ViewNote from './ViewNote';
import Notes from './Notes';


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        }
    }

    handleSubmit = (e) => {
        const { title, content } = this.state;
        this.props.editNote(this.props.match.params.id, {title, content});
        this.setState({
            title: '',  
            content: ''
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
            <h3>Edit Note</h3>
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
                    <Link exact='true' to='/' component={Notes}>
                        <button type='submit'
                            onClick={this.handleSubmit}>Submit
                        </button>
                    </ Link>
                </Form>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return ({
        notes: state.notes
    })     
}

export default connect(mapStateToProps, { editNote })(Edit);