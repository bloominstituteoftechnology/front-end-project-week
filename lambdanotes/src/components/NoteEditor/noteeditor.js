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
    height: 5vh;
`;

const BodyInput = Styled.textarea`
    width: 90%;
    height: 20vh;
`;

class NoteEditor extends Component {
    state = {
        tmpNote: {
            title: '',
            textBody: '',
            tags: '',
            _id: '',
            __v: -1
        }
    };

    componentDidMount = () => {
        // Only set the local state from the noteView redux object if we're editing a note
        if(this.props.isEditing) {
            this.setState({
                tmpNote: {
                    title: this.props.tmpNote.title,
                    textBody: this.props.tmpNote.textBody,
                    tags: this.props.tmpNote.tags,
                    _id: this.props.tmpNote._id,
                    __v: this.props.tmpNote.__v
                }
            });
        }
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
        // If something is different from redux noteView object
        if(this.props.tmpNote.title !== this.state.tmpNote.title || this.props.tmpNote.textBody !== this.state.tmpNote.textBody || this.props.tmpNote.tags !== this.state.tmpNote.tags) {
            // The Notes API expects the tags to be an array of strings. I transformed it over in NoteEditorContainer to a single comma-separated string to make dealing with the input handler easier.
            const stateTagsArray = this.state.tmpNote.tags.split(',');
            if(this.props.isEditing === false) {
                this.props.postNote({
                    title: this.state.tmpNote.title,
                    textBody: this.state.tmpNote.textBody,
                    tags: stateTagsArray
                });
                // TODO: Find a better way to wait for the POST to finish before calling history.push
                setTimeout(() => this.props.history.push('/'), 1000);
            } else {
                this.props.putNote(
                    {
                        title: this.state.tmpNote.title,
                        textBody: this.state.tmpNote.textBody,
                        tags: stateTagsArray,
                        _id: this.state.tmpNote._id
                    }
                );
                // TODO: Find a better way to wait for the PUT to finish before calling history.push
                setTimeout(() => this.props.history.push(`/notes/${this.state.tmpNote._id}`), 1000);
            }
        }
    };

    render() {
        return (
            <ContentDiv>
                <h2>{this.props.isEditing ? 'Edit Note:' : 'Create New Note:'}</h2>
                <form onSubmit={this.submitHandler}>
                    <TitleInput name='title' value={this.state.tmpNote.title} onChange={this.inputHandler} placeholder='Note Title' />
                    <br />
                    <br />
                    <BodyInput name='textBody' value={this.state.tmpNote.textBody} onChange={this.inputHandler} placeholder='Note Content' />
                    <br />
                    <TitleInput name='tags' value={this.state.tmpNote.tags} onChange={this.inputHandler} placeholder='Tags separated by comma'></TitleInput>
                    <LeftButton buttonColor='aqua'>{this.props.isEditing ? 'Update' : 'Save'}</LeftButton>
                </form>
            </ContentDiv>
        );
    }
};

NoteEditor.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    tmpNote: PropTypes.shape({
        tags: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        textBody: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        __v: PropTypes.number
    }).isRequired,
    postNote: PropTypes.func.isRequired,
    putNote: PropTypes.func.isRequired
};

export default NoteEditor;
