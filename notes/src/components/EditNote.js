import React, { Component } from 'react';

import { Form, TitleInput, BodyInput, Button } from '../Styles/Form';
import { SectionHeading } from '../Styles/GeneralStyles';

class EditNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        this.props.notes.map(note => {
            if (this.props.match.params.id === note._id) {
              this.setState({ 
                  title: note.title, 
                  body: note.textBody 
              });
            }
          });
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault()

        const id = this.props.match.params.id;

        const note = {
            title: this.state.title,
            textBody: this.state.body
        };

        this.props.editNote(id, note);
        this.props.history.push('/');
     }

    render() {
        return (
            <Form>
                <SectionHeading>Edit Note:</SectionHeading>
                <form onSubmit={this.submitHandler}>
                    <TitleInput type="text" name="title" value={this.state.title} onChange={this.inputHandler} placeholder="Title"/>
                    <BodyInput type="text" name="body" value={this.state.body} onChange={this.inputHandler} placeholder="Body"/>
                    <Button type="submit">Save</Button>
                </form>
            </Form>
        )
    }
}

export default EditNote;