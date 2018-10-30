import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NoteContainer = styled.div`
margin 20px;
border: 1px solid black;
background-color: white;
width: 200px;
height: 150px;
`

function SingleNote({ note }) {
    const { id, title, content } = note;
    return (
        <Link to={`/notes/${id}`}>
            <NoteContainer>
                <div className='headline'>{title}</div>
                <div className='content'>{content}</div>
            </NoteContainer>
        </Link>
    );
}

expo
