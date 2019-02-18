import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class AddNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                title: '',
                textBody: ''
            }
        }
    }
    changeHandler = e => {
        this.setState({
            note: {
                ...this.state.note,
                [e.target.name]: e.target.value
            }
        })
    }
    addNoteHandler = e => {
        e.preventDefault();
        this.props.addNote(this.state.note);
    }

    render() {
        return (
            <form onSubmit={this.addNoteHandler}>
                <Input
                    value={this.state.note.title}
                    onChange={this.changeHandler}
                    name="title"
                    placeholder="Title"
                    type="text"
                />

                <Input
                    value={this.state.note.textBody}
                    onChange={this.changeHandler}
                    name="textBody"
                    placeholder="Body"
                    type="textarea"
                />
               
                <Button color="success" type="submit">Add Note</Button>
            </form>
        )
    }
}

export default AddNoteForm;