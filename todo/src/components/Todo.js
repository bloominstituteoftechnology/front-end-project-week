import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteToDo } from '../actions';
import './App.css';
import styled from 'styled-components';

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
    margin: 0px;
    padding: 8px 0px;
    margin-bottom: 10px;
`;

const TextBodyP = styled.p`
    overflow: hidden;
    text-overflow: ellipsis-lastline;
    font-size: 2.0rem;
    margin-top: 0px;
`;

const ToDo = props => {
    const { toDo, deleteToDo } = props

    const clickHandler = () => {
        deleteToDo(toDo.id)
    }

    return(
        <ToDoDiv key={toDo.id}>
            <TitleH3>{toDo.title}</TitleH3>
            <TextBodyP>{toDo.textBody.slice(0, 145)} ...</TextBodyP>
        </ToDoDiv>
    )
}

const mapStateToProps = () => ( {} )

export default connect(mapStateToProps, {deleteToDo})(ToDo);