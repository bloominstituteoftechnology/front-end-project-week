import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const PreviewDiv = Styled.div`
    background-color: #ffffff;
    padding: 5px;
    margin: 10px;
    border: 1px solid #afafaf;
    border-radius: 1px;
    width: 150px;
    height: 150px;
    h4 {
        font-size: 1.6rem;
        font-weight: bold;
    }
    hr {
        width: 95vh;
    }
`;

const NotePreview = (props) => {
    return (
        <PreviewDiv>
            <h4>A note!</h4>
            <hr />
            <p>Note preview content!</p>
        </PreviewDiv>
    );
};

NotePreview.propTypes = {};

export default NotePreview;
