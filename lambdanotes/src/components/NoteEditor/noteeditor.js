import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { StyledFormButton, ContentDiv } from '../../styling/';

const LeftButton = Styled(StyledFormButton)`
    /* quick override of the StyledButton 'margin: 10px auto' */
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

const NoteEditor = (props) => {
    return (
        <ContentDiv>
            <h2>{/*{props.editing.isEditing ? 'Edit ' : 'Create New '}*/}Note:</h2>
            <form onSubmit={(event) => event.preventDefault()}>
                <TitleInput name='title' placeholder='Note Title' />
                <br />
                <br />
                <BodyInput name='textBody' placeholder='Note Content' />
                <br />
                <LeftButton buttonColor='aqua'>Save</LeftButton>
            </form>
        </ContentDiv>
    );
};

NoteEditor.propTypes = {};

export default NoteEditor;
