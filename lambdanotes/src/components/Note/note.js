import React from 'react';
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
`;

const Note = (props) => {
    return (
        props.status.gettingSingleNote ?
            <ContentDiv>
                <StatusP statusType='good'>Please wait while we retrieve the note. :)</StatusP>
            </ContentDiv>
        : props.status.noteError !== '' ?
            <ContentDiv>
                <StatusP statusType='error'>{props.status.noteError}</StatusP>
            </ContentDiv>
        : props.status.noteMessage !== '' ?
            <ContentDiv>
                <StatusP statusType='good'>{props.status.noteMessage}</StatusP>
            </ContentDiv>
        : props.note.__v === undefined ?
            <StatusP statusType='warning'>Note may no longer exist. :(</StatusP>
        :
            <ContentDiv>
                <ManipDiv>
                    <DecoSpan>edit</DecoSpan>
                    <DecoSpan onClick={props.deletePromptModal}>delete</DecoSpan>
                </ManipDiv>
                <h2>{props.note.title}</h2>
                <SizedP>{props.note.textBody}</SizedP>
                {props.status.deletePrompt ?
                    <DeleteModal 
                        noteId={props.note._id} 
                        deletePromptModal={props.deletePromptModal} 
                        deleteNote={props.deleteNote} 
                    />
                :
                    null
                }
            </ContentDiv>
    );
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
    deletePromptModal: PropTypes.func,
    deleteNote: PropTypes.func
};

export default Note;
