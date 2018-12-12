import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    width: 31.6%;
    height: 273px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 35px;
    background: white;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: black;
    h1 {
        display: block;
        font-size: 1.64rem;
        width: 81.1%;
        margin-left: auto;
        margin-right: auto;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-top: 10px;
    }
    span {
        border: 1px solid rgba(0, 0, 0, 0.5);
        display: block;
        margin-top: -13px;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
    p {
        display: block;
        text-overflow: ellipsis;
        width: 81.2%;
        margin-left: auto;
        margin-right: auto;
        font-size: 1.195rem;
        overflow: hidden;
        margin-top: 9px;
        font-weight: 300;
    }
`;

const Note = props => {
    return (
        <StyledLink
            key={props.note._id}
            to={{
                pathname: `/notes/${props.note._id}`,
                query: { note: props.note }
            }}>
            <h1>{props.note.title}</h1>
            <span />
            <p>{props.note.textBody}</p>
        </StyledLink>
    );
};

export default Note;
