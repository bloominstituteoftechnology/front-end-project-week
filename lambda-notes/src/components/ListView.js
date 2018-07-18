import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { SideBar} from './SideBar';
import  NoteCard from './NoteCard';
import styled from 'styled-components';

const List = styled.div`

    display: flex;
`;

 const ListView = () => (
    <List > 
    <SideBar />
    <div>
        <NoteCard />
        </div>
        </List>);

export default ListView