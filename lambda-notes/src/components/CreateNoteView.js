import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { SideBar} from './SideBar';
import  CreateNote from './CreateNote';
import styled from 'styled-components';

const List = styled.div`

    display: flex;
`;

 const CreateNoteView = () => (
    <List > 
    <SideBar />
    <div>
        <CreateNote />
        </div>
        </List>);

export default CreateNoteView