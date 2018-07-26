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
    color:black;
    `
const NoteCardTitleStyledHeading = styled.h2`
    font-size:22px;
`
const NoteCardTitleContainerStyledDiv = styled.div`
    margin-top:8px;
    margin-left:10px;
    margin-right:10px;
    margin-bottom:5px;
`

const NoteCardContentStyledP = styled.p`
    font-size:16px;
`
const NoteCardContentContainerStyledDiv = styled.div`
    border-top: 1px solid #979797;
    padding-top:10px;
    margin-left:10px;
    margin-right:10px;
    height:140px;
    overflow:hidden;
`

const NoteCard = props => {
    return (
        <div>
            <Link to = {`/note/${props.noteEntry.id}`} style={{ textDecoration: "none" }}>
                <NoteCardContainerStyledDiv>
                    <NoteCardTitleContainerStyledDiv>
                        <NoteCardTitleStyledHeading>
                            TITLE:{props.noteEntry.title}
                        </NoteCardTitleStyledHeading>
                    </NoteCardTitleContainerStyledDiv>
                    
                    <NoteCardContentContainerStyledDiv>
                        <NoteCardContentStyledP>
                            TEXT: {props.noteEntry.textBody}
                        </NoteCardContentStyledP>
                    </NoteCardContentContainerStyledDiv>
                </NoteCardContainerStyledDiv>
            </Link>
        </div>
    );
}

export default NoteCard; 