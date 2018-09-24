import React from 'react';
import PropTypes from 'prop-types';

import { ContentDiv } from '../../styling/';
import NotePreview from './notepreview';


const NotesList = (props) => {
    return (
        <ContentDiv>
            <h3>Your Notes:</h3>
            <NotePreview />
            <NotePreview />
        </ContentDiv>
    );
};

NotesList.propTypes = {};

export default NotesList;
