import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Form, Input, FormText, Label, FormGroup } from 'reactstrap';

import "../App.css";
import { editNote } from '../Actions';



const mapStateToProps = (state) => {
    return ({
        notes: state.notes
    })     
}

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.location.state.title,
            content: this.props.location.state.content,
        }
    }

    handleSubmit() {

    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type="title" value={this.state.title} name="title" id="title" placeholder={this.props.location.state.title} />
                </FormGroup>
                <FormGroup>
                    <Label>Content</Label>
                    <Input type="content" value={this.state.content} name="content" id="content" placeholder={this.props.location.state.content} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        )
    }


}

export default connect(mapStateToProps, { editNote })(Edit);