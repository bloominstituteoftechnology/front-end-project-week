import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NoteTitle from '../Creator/';
import NoteContent from './NoteContentInput';

const NoteBorder = styled.form`

`;

const Note = () => {
    return(
        <NoteBorder>
            <NoteTitle />
            <NoteContent />
        </NoteBorder>
    )
}

Note.propType = {
    note: PropTypes.shape({
        text: PropTypes.string,
        title: PropTypes.string
    })
}

export default Note;