import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const NoteContainer=styled.div`
width: 30%;
margin-right: 3%;
background-color: white;
border: 1px solid #ddd;
height: 220px;
margin-bottom: 20px;
text-align: left;

h3,p{
    margin-left: 10%;
    margin-right: 10%;
    color:#000;
    word-wrap: break-word;
}
h3{
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
}
p{
    font-size: 16px;
}
a{
    text-decoration: none;
}
`
const Rule=styled.div`
width: 80%;
margin: 0 auto;
height: 2px;
background-color:#c6c6c6;
`
const Note=(props)=><NoteContainer>
    <Link to={`/notes/${props.data._id}`}>
    <h3>{props.data.title}</h3>
    <Rule/>
    {props.data.textBody.length<100?
    <ReactMarkdown source={props.data.textBody}/>:
    <ReactMarkdown source={props.data.textBody.slice(0,100)+'...'}/>}
    </Link>
    </NoteContainer>
export default Note;