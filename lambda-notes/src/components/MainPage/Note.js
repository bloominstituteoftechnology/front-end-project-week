import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';


const NoteContainer = styled.div`
margin 20px;
border: 1px solid black;
background-color: white;
width: 200px;
height: 150px;
`

function SingleNote({ note }) {
    const { _id, title, textBody } = note;
    return (
        <Link to={`/view-note/${_id}`}>
            <NoteContainer>
                <div className='headline'>{title}</div>
                <div className='content'>{textBody}</div>
            </NoteContainer>
        </Link>
    );
}

export default SingleNote;