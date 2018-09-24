import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { MarkdownPreview } from 'react-marked-markdown';


const NoteDisplay = styled.div`

    width: 30%;
    margin: 10px;
    overflow: hidden;
    height: 200px;
    background: white;
    padding: 10px;
    border: 1px solid gray;
    
    : hover {
        opacity: 0.8;
    }
    
    
    > a {
        text-decoration: none;
        color: black;
    

    > h1 {
        font-weight: bold;
        font-size: 2.2rem;
        border-bottom: 1px solid gray;
        line-height: 30px;
        margin-bottom: 5px;
    }

    > p {
       font-size: 1.2rem;
       height: 150px;
       overflow: hidden;
       line-height: 1.5;
    }
    }
`

const Note = (props) => {
    
        return (
            
            <NoteDisplay>
            <Link  to={`/note/${props.id}`}>
                <h1>{props.title}</h1>
                <MarkdownPreview value={props.content} />
                </Link>
            </NoteDisplay>
            
         );
    
}
 
export default Note;