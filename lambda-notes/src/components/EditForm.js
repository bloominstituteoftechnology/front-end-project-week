import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import axios from 'axios';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                id: null,
                title: '',
                textBody: ''
                // tags: []
            },
            notes: this.props.notes
        }
    }
    componentDidMount() {

        const id = this.props.match.params.id;
        console.log(this.props.notes);
        if (this.props.notes.length === 0) {
            axios
                .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
                .then(response => {
                    
                    this.setState({ 
                        note: response.data,
                        // notes: this.state.notes
                    });
                })
                .catch(err => {
                    console.log(err);
                })
            // this.setState({note: newNote});
            // this.props.viewNote(id);
        }
        else {
            console.log(this.props)
            let noteInfo = this.props.notes.find(note => id === note._id);
            // console.log(noteInfo);
            this.setState({note: noteInfo})
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
        this.props.editNote(this.props.match.params.id, this.state.note);
        this.props.history.push(`/${this.props.match.params.id}`);
        // this.props.history.goForward()

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