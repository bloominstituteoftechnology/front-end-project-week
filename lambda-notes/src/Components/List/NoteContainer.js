import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './NoteContainer.css';
import { dummydata } from '../../dummydata/dummydata';
import NoteCardList from './NoteCardList';
import { connect } from 'react-redux';
import { createNote, readNote, updateNote, deleteNote } from '../../JS/actions/index-a';

class NoteContainer extends Component {

    render(){
        return(
            <div className = 'list-wrapper'>
            <Sidebar />
            <NoteCardList className = "card-container"/>
            </div>
        )
    }
}
export default NoteContainer;