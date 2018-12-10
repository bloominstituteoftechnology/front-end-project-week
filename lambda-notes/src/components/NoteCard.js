import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoteCardDiv = styled.div`
	margin: 1.2rem 1rem;
	width: 194px;
	height: 198px;
    border: 1px solid lightgray;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
	display: flex;
    flex-direction: column;
    background-color: #FFF;
`;

const NoteCardBorder = styled.div`
	width: 192px;
    height: 192px;
    // overflow-y: scroll;
    border-right: 1.8rem solid #FFF;
    border-left: 1.8rem solid #FFF;
    border-bottom: 1.3rem solid #FFF;
`;

const TitleDiv = styled.div`
    padding-top: 10px;
    height: 37px;
    overflow: hidden;
    border-bottom: 1px solid gray;
    white-space: pre-wrap;
    font-weight: 700;
    line-height: 1.4;
    font-size: 1.7rem;
`

const NoteContent = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;  
    height: 82%;
    white-space: pre-wrap;
    padding: 1rem 0;
    font-size: 1.3rem;
    line-height: 1.6;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
`

export default function NoteCard(props) {
	return (
        <Link to={`/${props.note._id}`}>
            <NoteCardDiv>
                <NoteCardBorder>
                    <TitleDiv>
                        <h3>{props.note.title}</h3>
                    </TitleDiv>
                    <NoteContent>
                        {props.note.textBody}
                    </NoteContent>
                </NoteCardBorder>
            </NoteCardDiv>
        </Link>
	);
}
