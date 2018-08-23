import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import  SideBar from './SideBar';
import  Edit from './Edit';
import styled from 'styled-components';

const List = styled.div`

    display: flex;
`;

 const EditView = (props) => (
    <List > 
    {/* <SideBar /> */}
    <div>
        <Edit notes={props.notes} note={props.note} notetitle={props.notetitle} notebod={props.notebod}
         id={props.id}
        handleNoteChange={props.changeNote} editNote={props.editNote} />
        </div>
        </List>);

export default EditView