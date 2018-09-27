import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { ContentDiv, StatusP } from '../../styling/';
import { DeleteModal } from '../DeleteModal/';

const DecoSpan = Styled.span`
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
    margin: 0 0 0 10px;
`;

const ManipDiv = Styled.div`
    width: 13ch;
    margin-top: -40px;
    margin-left: auto;
`;

const SizedP = Styled.p`
    font-size: 1.5rem;
    white-space: pre-wrap;
`;

const BoldSpan = Styled.span`
    font-size: 1.5rem;
    font-weight: bold;
`;

class Note extends Component {
    editHandler = () => {
        this.props.noteToEdit(this.props.note._id);
        setTimeout(() => this.props.history.push('/noteeditor'), 1000);
    };

    render() {
        return (
            this.props.status.gettingSingleNote ?
                <ContentDiv>
                    <StatusP statusType='good'>Please wait while we retrieve the note. :)</StatusP>
                </ContentDiv>
            : this.props.status.noteError !== '' ?
                <ContentDiv>
                    <StatusP statusType='error'>{this.props.status.noteError}</StatusP>
                </ContentDiv>
            : this.props.status.noteMessage !== '' ?
                <ContentDiv>
                    <StatusP statusType='good'>{this.props.status.noteMessage}</StatusP>
                </ContentDiv>
            :
                <ContentDiv>
                    <ManipDiv>
                        <DecoSpan onClick={this.editHandler}>edit</DecoSpan>
                        <DecoSpan onClick={this.props.deletePromptModal}>delete</DecoSpan>
                    </ManipDiv>
                    <h2>{this.props.note.title}</h2>
                    <SizedP>{this.props.note.textBody}</SizedP>
                    <br /><br /><br />
                    <SizedP><BoldSpan>Tags: </BoldSpan>{this.props.note.tags.join(', ')}</SizedP>
                    {this.props.status.deletePrompt ?
                        <DeleteModal 
                            noteId={this.props.note._id} 
                            deletePromptModal={this.props.deletePromptModal} 
                            deleteNote={this.props.deleteNote} 
                        />
                    :
                        null
                    }
                </ContentDiv>
        );
    }
};

Note.propTypes = {
    note: PropTypes.shape({
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
        textBody: PropTypes.string,
        _id: PropTypes.string,
        __v: PropTypes.number
    }),
    status: PropTypes.shape({
        postingNote: PropTypes.bool,
		postedNote: PropTypes.bool,
		gettingNotes: PropTypes.bool,
        gotNotes: PropTypes.bool,
        gettingSingleNote: PropTypes.bool,
        gotSingleNote: PropTypes.bool,
		puttingNote: PropTypes.bool,
		putNote: PropTypes.bool,
		deletePrompt: PropTypes.bool,
		deletingNote: PropTypes.bool,
        deletedNote: PropTypes.bool,
        noteMessage: PropTypes.string,
		noteError: PropTypes.string
    }),
    noteToEdit: PropTypes.func,
    deletePromptModal: PropTypes.func,
    deleteNote: PropTypes.func
};

export default Note;
