import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const PreviewDiv = Styled.div`
    background-color: #ffffff;
    padding: 10px;
    margin: 0 15px 20px 0;
    border: 1px solid #afafaf;
    border-radius: 1px;
    width: 200px;
    height: 200px;
    h4 {
        font-size: 1.6rem;
        font-weight: bold;
        cursor: pointer;
    }
    hr {
        width: 180px;
        margin: 5px auto;
    }
    p {
        font-size: 1.2rem;
        /* styles for ellipse */
        /* based on http://hackingui.com/front-end/a-pure-css-solution-for-multiline-text-truncation/ */
        overflow: hidden;
        position: relative;
        line-height: 2rem;
        /* line-height * # of lines */
        max-height: 14rem;
        text-align: justify;
        margin-right: -1rem;
        padding-right: 1rem;
        &:before {
            content: '...';
            position: absolute;
            right: 0;
            bottom: 0;
        }
        &:after {
            content: '';
            position: absolute;
            right: 0;
            width: 1rem;
            height: 1rem;
            margin-top: 0.2rem;
        }
    }
`;

// TODO: Make the whole div clickable
const NotePreview = (props) => {
    return (
        <PreviewDiv>
            <h4>{props.note.title}</h4>
            <hr />
            <p>{props.note.textBody}</p>
        </PreviewDiv>
    );
};

NotePreview.propTypes = {
    note: PropTypes.shape({
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
        textBody: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        __v: PropTypes.number
    })
};

export default NotePreview;
