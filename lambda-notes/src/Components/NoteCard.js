import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const NoteCardContainerStyledDiv = styled.div`
    width:190px;
    height:200px;
    overflow:hidden;
    border:1px solid #979797;
    background-color:white;
    margin:10px;
    text-decoration:none;
    padding-left:5px;
    // color:black;
    color:#4A4A4A;
    `
const NoteCardTitleStyledHeading = styled.h2`
    font-size:22px;
`
const NoteCardTitleContainerStyledDiv = styled.div`
    margin-top:8px;
    margin-left:10px;
    margin-right:10px;
    margin-bottom:5px;
    max-height:45px;
    overflow:hidden
`

const NoteCardContentStyledP = styled.p`
    font-size:16px;
`
const NoteCardContentContainerStyledDiv = styled.div`
    border-top: 1px solid #979797;
    padding-top:10px;
    margin-left:10px;
    margin-right:10px;
    height:123px;
    overflow:hidden;
    white-Space: pre-wrap;
`

const NoteCard = props => {
    // console.log('NoteCard.js props: ', props)
    return (
        <div>
            <Link to = {`/note/${props.noteEntry.id}`} style={{ textDecoration: "none" }}>
                <NoteCardContainerStyledDiv>
                    <NoteCardTitleContainerStyledDiv>
                        <NoteCardTitleStyledHeading>
                            {props.noteEntry.title}
                        </NoteCardTitleStyledHeading>
                    </NoteCardTitleContainerStyledDiv>
                    
                    <NoteCardContentContainerStyledDiv>
                        <NoteCardContentStyledP>
                            {props.noteEntry.textBody}
                        </NoteCardContentStyledP>
                    </NoteCardContentContainerStyledDiv>
                </NoteCardContainerStyledDiv>
            </Link>
        </div>
    );
}

export default NoteCard; 