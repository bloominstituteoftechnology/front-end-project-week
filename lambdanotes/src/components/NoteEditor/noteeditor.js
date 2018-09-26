import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { StyledFormButton, ContentDiv } from '../../styling/';

const LeftButton = Styled(StyledFormButton)`
    & {
        margin: 10px 0;
    }
`;

const TitleInput = Styled.input`
    box-sizing: border-box;
    width: 50%;
    height: 3vh;
`;

const BodyInput = Styled.textarea`
    width: 90%;
    height: 20vh;
`;

class NoteEditor extends Component {
    state = {
        tmpNote: this.props.tmpNote
    };

    inputHandler = (event) => {
        this.setState({
            ...this.state,
            tmpNote: {
                ...this.state.tmpNote,
                [event.target.name]: event.target.value
            }
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        if(this.props.isEditing === false) {
            this.props.postNote({
                title: event.target.title.value,
                textBody: event.target.textBody.value
            });
            // TODO: Can we delay the history push long enough for the new note to be available from the API? Let an extra setTimeout() decide! But seriously, find a better way to wait for the POST to finish before calling history.push
            setTimeout(() => this.props.history.push('/'), 1000);
        } else {
            const tmpNote = this.props.tmpNote;
            const tagsCheck = this.state.tmpNote.tags.filter( (tag, i) => tag === tmpNote.tags[i]);
            if(tmpNote.title !== this.state.tmpNote.title || tmpNote.textBody !== this.state.tmpNote.textBody || tagsCheck.length !== tmpNote.tags.length) {
                this.props.putNote(
                    {
                        title: this.state.tmpNote.title,
                        textBody: this.state.tmpNote.textBody,
                        tags: this.state.tmpNote.tags,
                        _id: this.state.tmpNote._id
                    }
                );
            }
            setTimeout(() => this.props.history.push(`/notes/${this.state.tmpNote._id}`), 1000);
        }
    };

    render() {
        return (
            <ContentDiv>
                <h2>{this.props.isEditing ? 'Edit ' : 'Create New '}Note:</h2>
                <form onSubmit={this.submitHandler}>
                    <TitleInput name='title' value={this.state.tmpNote.title} onChange={this.inputHandler} placeholder='Note Title' />
                    <br />
                    <br />
                    <BodyInput name='textBody' value={this.state.tmpNote.textBody} onChange={this.inputHandler} placeholder='Note Content' />
                    <br />
                    <LeftButton buttonColor='aqua'>{this.props.isEditing ? 'Update' : 'Save'}</LeftButton>
                </form>
            </ContentDiv>
        );
    }
};

NoteEditor.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    tmpNote: PropTypes.shape({
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
        textBody: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        __v: PropTypes.number
    }).isRequired,
    postNote: PropTypes.func.isRequired,
    getNotes: PropTypes.func.isRequired,
    putNote: PropTypes.func.isRequired
};

export default NoteEditor;
