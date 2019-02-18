import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import axios from 'axios';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                _id: null,
                title: '',
                textBody: ''
            },

            notes: []
        }
    }
    componentDidMount() {

        if (this.props.notes.length === 0 && this.props.note === null) {

            axios
                .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
                .then(response => {

                    this.setState({ 
                        note: response.data,
                        notes: this.props.notes
                    });

                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {

            axios
                .get(`https://fe-notes.herokuapp.com/note/get/all`)
                .then(response => {
                    
                    this.setState({
                        notes: response.data,
                        note: this.props.note
                    })
                    
                })
                .catch(err => {
                    console.log(err);
                })
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
    editNoteHandler = e => {
        e.preventDefault();
        this.props.editNote(this.state.note._id, this.state.note);
    }

    render() {
        return (
            <form onSubmit={this.editNoteHandler}>
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
                <Button color="success" type="submit">Edit Note</Button>
                
            </form>
        )
    }
}

export default EditForm;