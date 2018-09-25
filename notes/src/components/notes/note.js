import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const NoteContainer=styled.div`
width: 30%;
margin-right: 3%;
background-color: white;
border: 1px solid #ddd;
height: 230px;
margin-bottom: 20px;
text-align: left;
h3,p{
    color:#000;
    word-wrap: break-word;
}
h3{
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
p{
    font-size: 16px;
}
a{
    text-decoration: none;
    color: #000;
}
`
const Content=styled.div`
    width: 80%;
    margin: 0 auto;
    `
const Rule=styled.div`
width: 100%;
margin: 0 auto;
height: 2px;
background-color:#c6c6c6;
`
const NoteTag=styled.p`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    span{
        margin-right: 3%;
    }
`
const Note=(props)=><NoteContainer>
    <Link to={`/notes/${props.data.id}`}>
    <Content>
    <h3>{props.data.title}</h3>
    <Rule/>
    {props.data.textBody.length<100?
    <ReactMarkdown source={props.data.textBody}/>:
    <ReactMarkdown source={props.data.textBody.slice(0,101)+'...'}/>}
    {props.data.tags!==null?<NoteTag><span style={{textDecoration:'underline'}}>{'tags: '}</span> {props.data.tags}</NoteTag>:null}
    </Content>
    </Link>
    </NoteContainer>
export default Note;