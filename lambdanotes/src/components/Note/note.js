import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { ContentDiv } from '../../styling/';
import { DeleteModal } from '../DeleteModal/';
import { loremipsum } from '../../assets/loremipsum';

const DecoSpan = Styled.span`
    text-decoration: underline;
    font-weight: bold;
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
        <ContentDiv>
            <ManipDiv>
                <DecoSpan>edit</DecoSpan>
                <DecoSpan>delete</DecoSpan>
            </ManipDiv>
            <h2>{/*{props.note.title}*/}Note Title</h2>
            <SizedP>{/*{props.note.textBody}*/}{loremipsum}</SizedP>
            {/* <input name='tags' type='text' /> */}
            {/* <DeleteModal /> */}
        </ContentDiv>
    );
};

Note.propTypes = {};

export default Note;
