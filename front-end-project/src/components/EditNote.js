import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const EditNoteContainer = styled.div`
    padding-top: 50px;
`

const EditHeader = styled.h2`
    color: #4A494A;
    font-size: 1.4rem;
    margin-bottom: 30px;
    font-weight: bold;
` 

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteToEdit: {},
            updatedTitle: null,
            updatedTextBody: null,
            loading: true
        }
    }

    updateTitleInputHandler = (e) => {
        this.setState({
            updatedTitle: e.target.value
        }, console.log(this.state.updatedTitle));
    }

    updateTextBodyInputHandler = (e) => {
        this.setState({
            updatedTextBody: e.target.value
        }, console.log(this.state.updatedTextBody));
    }

    submitEdits = (e) => {
        e.preventDefault();
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, {
                title: this.state.updatedTitle,
                textBody: this.state.updatedTextBody,
            })
            .then((response) => {
                this.props.refreshMain();
                this.props.history.push(`/notes/${this.props.match.params.id}`);
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState(
                    {
                        noteToEdit: response.data,
                        loading: false
                    });
            })
            .catch(err => {
                this.setState({loading: false});
                console.log(err)
            });
    }

    render() {
        return (
            <EditNoteContainer>
                <EditHeader>
                    Edit Note:
                </EditHeader>
                <form onSubmit={this.submitEdits}>
                    <input
                        type='text'
                        name='title'
                        defaultValue={this.state.noteToEdit.title}
                        onChange={this.updateTitleInputHandler}
                    />
                    <input
                        type='text'
                        name='textBody'
                        defaultValue={this.state.noteToEdit.textBody}
                        onChange={this.updateTextBodyInputHandler}
                    />
                    <button type='submit'>Update</button>                    
                </form>
            </EditNoteContainer>
        )
    }
}

export default EditNote;