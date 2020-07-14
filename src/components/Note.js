import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
    width: 192px;
    height: 196px;
    border: 1px solid black;
    margin: 1.2rem 1.12%;
    padding-top: 0.6rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1.5rem;
    overflow: hidden;
`

const Content = styled.p`
    height: 100%;
    font-size: 1.2rem;
    font-family: 'Raleway', sans-serif;
    margin-top: 1rem;
    padding-right: 1.5rem;
    line-height: 1.8;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Note = props => {
    return (
        <Card>
            <h3>{props.note.title}</h3>
            <hr style={{ margin: 0 }} />
            {props.note.content.length > 140
                ? <Content>{props.note.content.substring(0, 140)} ...</Content>
                : <Content>{props.note.content}</Content>
            }
        </Card>
    )
}

Note.propTypes = PropTypes.shape({
    "tags": PropTypes.string.isRequired,
    "_id": PropTypes.string.isRequired,
    "title": PropTypes.string.isRequired,
    "textBody": PropTypes.string.isRequired,
    "__v": PropTypes.number.isRequired,
}).isRequired

export default Note;