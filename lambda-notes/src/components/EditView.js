import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { SideBar} from './SideBar';
import  Edit from './Edit';
import styled from 'styled-components';

const List = styled.div`

    display: flex;
`;

 const CreateNoteView = () => (
    <List > 
    <SideBar />
    <div>
        <Edit />
        </div>
        </List>);

export default CreateNoteView