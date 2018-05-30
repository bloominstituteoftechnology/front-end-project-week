import React, { Component } from 'react';
import { connect } from 'react-redux';
import {dummydata as notes} from '../../dummydata/dummydata';
import './NoteCardList.css';
import NoteCards from '../NoteCard/NoteCard';

// function mapStateToProps(state) {
//     return {
//         state:state.notes
//     };
// }

export const HeaderName = (props) => {
    return (
        <h3>{props.text}</h3>
    )
}

const NoteCardList = (props)=>{
    return(
        <div className = "main-container">
            
            <NoteCards notes={notes}/>
        </div>
    );
}




export default NoteCardList;