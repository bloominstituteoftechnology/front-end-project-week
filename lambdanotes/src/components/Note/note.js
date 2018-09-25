import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { ContentDiv } from '../../styling/';

const DecoSpan = Styled.span`
    text-decoration: underline;
    margin: 0 0 0 10px;
`;

const Note = (props) => {
    return (
        <ContentDiv>
            <div>
                <DecoSpan>edit</DecoSpan>
                <DecoSpan>delete</DecoSpan>
            </div>
            <h2>{/*{props.note.title}*/}Note Title</h2>
            <p>{/*{props.note.textBody}*/}Note body text</p>
            {/* <input name='tags' type='text' /> */}
        </ContentDiv>
    );
};

Note.propTypes = {};

export default Note;
