import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Note from './Note';

class NotePage extends Component {
    constructor() {
        super();
    }
    
    render() {
        let id = this.props.match.params.id
        let note = this.props.notes.find(note => note._id === id)
        return (
            <div className='note-page'>
                <div className='note-btns'>
                    <Link to={`/${id}/edit`}>Edit</Link>
                    <div className='note-btn'>Delete</div>
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

export default connect(mapStateToProps)(NotePage);