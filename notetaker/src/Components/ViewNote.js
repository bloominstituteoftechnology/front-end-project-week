import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import "../App.css";
import { getNote } from '../Actions';


const mapStateToProps = (state) => {
    return ({
        notes: state.notes
    })     
}

const ViewNote = props => {
    let id = props.match.params.id;
    let note = props.notes.find(note => note.id == id);

    return(
        <div className='ViewNote-container'>
            <Link to={'/edit'}>Edit</Link>
            <h2 className='ViewNote-title'>{note.title}</h2>
            <p className='ViewNote-content'>{note.content}</p>
        </div>
        )
}

export default connect(mapStateToProps, { getNote })(ViewNote);