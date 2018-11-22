import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NoteContainer=styled.div`
    width: 30%;
    margin-right: 3%;
    background-color: white;
    border: 1px solid #ddd;
    height: 230px;
    margin-bottom: 20px;
    text-align: left;
    overflow-x:hidden;
    overflow-y:scroll;
    white-space:pre-wrap;
    padding-bottom:10px;
h3,p,a{
    color:#000;
}
h3,p{
    word-wrap: break-word;
}
h3{
    font-size: 18px;
}
p{
    font-size:16px;
}
a{
    text-decoration:none;
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
const NoteTag=styled.div`
    span{
        margin-right: 3%;
        word-break:break-word;
    }
`
const Note=(props)=><NoteContainer>
    <Link to={`/notes/${props.data.id}`}>
        <Content>
            <h3>{props.data.title}</h3>
            <Rule/>
            <p>{props.data.textBody}</p>
            {props.data.tags!==null ?
            <NoteTag>
                <span><b>{'tags: '}{props.data.tags}</b></span> 
            </NoteTag>
            :null}
        </Content>
    </Link>
</NoteContainer>
export default Note;