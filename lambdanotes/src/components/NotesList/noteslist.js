import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { ContentDiv } from '../../styling/';
import NotePreview from './notepreview';

const ListDiv = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: auto;
`;

const NotesList = (props) => {
    return (
        <ContentDiv>
            <h2>Your Notes:</h2>
            <ListDiv>
                {props.status.postingNotes || props.status.gettingNotes || props.status.puttingNote || props.status.deletingNote ? 
                    <p>Retrieving updated notes. Please wait. :)</p>
                :
                    props.notes.map( (note) => <NotePreview note={note} key={note._id} />)
                }
            </ListDiv>
        </ContentDiv>
    );
};

NotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
        textBody: PropTypes.string,
        _id: PropTypes.string.isRequired,
        __v: PropTypes.number
    })).isRequired,
    status: PropTypes.shape({
        postingNote: PropTypes.bool.isRequired,
		postedNote: PropTypes.bool,
		gettingNotes: PropTypes.bool.isRequired,
		gotNotes: PropTypes.bool,
		puttingNote: PropTypes.bool.isRequired,
		putNote: PropTypes.bool,
		deletePrompt: PropTypes.bool,
		deletingNote: PropTypes.bool.isRequired,
		deletedNote: PropTypes.bool,
		noteError: PropTypes.string
    })
};

export default NotesList;
