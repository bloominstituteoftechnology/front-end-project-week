import React from 'react';
import '../App/index.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ToDoDiv = styled.div`
    border: 1px solid lightgrey;
    padding: 0px 2.5%;
    max-width: 244px;
    height: 300px;
    border: 2px solid #BCBCBC;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: white;
    margin-bottom: 25px;
`;

const TitleH3 = styled.h3`
    font-size: 3.0rem;
    border-bottom: 2px solid #BCBCBC;
    width: 100%;
    min-width: 228px;
    margin: 0px;
    padding: 8px 0px;
    margin-bottom: 10px;
    text-shadow: -1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey;
    font-weight: 400;
`;

const TextBodyP = styled.p`
    overflow: hidden;
    text-overflow: ellipsis-lastline;
    font-size: 2.0rem;
    margin-top: 0px;
    max-width: 244px;
    height: 210px;
`;


const ToDo = (props) => {
    let toDoContent = props.textBody;

    if (props.textBody.length > 160) { toDoContent = toDoContent.substring(0, 160) + '...' }

    let toDoTitle = props.title;

    if (props.title.length > 13) { toDoTitle = toDoTitle.substring(0, 13) }

    return (
        <ToDoDiv>
            <Link to={`/notes/${props.id}`}>
                <TitleH3>{toDoTitle}</TitleH3>

                <TextBodyP>{toDoContent}</TextBodyP>

            </Link>
        </ToDoDiv>
    )
}

export default ToDo;