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
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                <NotePreview />
                
            </ListDiv>
        </ContentDiv>
    );
};

NotesList.propTypes = {};

export default NotesList;
