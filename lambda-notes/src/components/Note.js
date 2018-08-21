import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NoteDisplay = styled.div`

    max-width: 200px;
    width: 100%;
    margin: 10px;


`

const Note = (props) => {
    
        return (
            <Link to={`/note/${props.id}`}>
            <NoteDisplay>
                <h1>{props.title}</h1>
                <div>
                    <p>{props.content}</p>
                </div>
            </NoteDisplay>
            </Link>
         );
    
}

Note.defaultProps = {
    title: '',
    content: ''
}
 
export default Note;