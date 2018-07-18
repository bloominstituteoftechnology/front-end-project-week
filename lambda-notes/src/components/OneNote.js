import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { SideBar} from './SideBar';
import  NoteCard from './NoteCard';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Onecont = styled.div`

    background-color: #F3F3F3;
    height:100vh;
    width:660px;
    border: solid 1px #979797
`;

const List = styled.div`

    display: flex;
`;

 const OneNote = () => (
    <List > 
    <SideBar />
    <Onecont>
    <div>Note Name</div> 
    <p>Lorem Ipsum</p>
    <button> <Link to="edit">edit</Link>
            </button>
            <button> <Link to="/delete">delete</Link>
            </button>
    </Onecont>
        </List>);

export default OneNote






 