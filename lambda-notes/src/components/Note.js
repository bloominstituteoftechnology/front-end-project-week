import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const NoteDisplay = styled.div`

    max-width: 150px;
    width: 100%;
    margin: 10px;
    overflow: hidden;
    height: 200px;
    background: white;
    padding: 10px;
    border: 1px solid gray;;
    
    
    > a {
        text-decoration: none;
        color: black;
    

    > h1 {
        font-weight: bold;
        font-size: 2rem;
        border-bottom: 1px solid gray;
        line-height: 30px;
        margin-bottom: 5px;
    }

    > p {
       font-size: 1.2rem;
       height: 150px;
       overflow: hidden;
    }
    }
`

const Note = (props) => {
    
        return (
            
            <NoteDisplay>
            <Link  to={`/note/${props.id}`}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                </Link>
            </NoteDisplay>
            
         );
    
}

Note.defaultProps = {
    title: '',
    content: ''
}
 
export default Note;