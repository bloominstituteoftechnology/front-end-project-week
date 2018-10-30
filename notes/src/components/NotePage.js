import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import { deleteNote } from '../actions';
import Note from './Note';

class NotePage extends Component {
    constructor() {
        super();
        this.state = {
            deleted: false
        }
    }

    deleteNote = (id) => {
        this.props.deleteNote(id);
        this.setState({ deleted: true })
    }

    render() {
        let id = this.props.match.params.id
        let note = this.props.notes.find(note => note._id === id)
        return this.state.deleted ?
        <Redirect to='/' /> :
        (
            <div className='note-page'>
                <div className='note-btns'>
                    <Link to={`/${id}/edit`}>Edit</Link>
                    <div className='note-btn' onClick={() => this.deleteNote(id)}>Delete</div>
                </div>
                <Note note={note}/>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    };
};

export default connect(mapStateToProps, { deleteNote })(NotePage);