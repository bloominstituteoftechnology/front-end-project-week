import React, { Component } from 'react';
import { editNote, getNote } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  } from "reactstrap";

const NoteEdit = (props) => {

    const { note } = props.note.id;


const saveNote = () => {
    this.props.editNote(this.props.note.id);
    this.props.history.push(`/notes/${this.props.note.id}`)

}
return({

}

)

}

// updatingNote: false,


export default NoteEdit

