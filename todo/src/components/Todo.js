import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteToDo } from '../actions';
import './App.css';
import styled from 'styled-components';

const ToDoDiv = styled.div`
    border: 1px solid lightgrey;
    padding: 10px;
    max-width: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0 auto;
`;

const ToDo = props => {
    const { toDo, deleteToDo } = props

    const clickHandler = () => {
        deleteToDo(toDo.id)
    }

    return(
        <ToDoDiv key={toDo.id}>

        </ToDoDiv>
    )
}