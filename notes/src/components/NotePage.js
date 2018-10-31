import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import { fetchNote, fetchNotes, deleteNote } from '../actions';

class NotePage extends Component {
    constructor() {
        super();
        this.state = {
            deleted: false
        }
    }

    componentDidMount() {
        this.props.fetchNote(this.props.match.params.id)
    }

    deleteNote = (id) => {
        this.props.deleteNote(id).then(() => this.props.fetchNotes())
        this.setState({ deleted: true })
    }

    render() {
        let id = this.props.match.params.id
        return this.state.deleted ?
        <Redirect to='/' /> :
        this.props.fetching ?
        <div>Loading Note</div> :
        (
            <div className='note-page'>
                <div className='note-btns'>
                    <Link className='note-btn' to={`/${id}/edit`}>edit</Link>
                    <div className='note-btn' onClick={() => this.deleteNote(id)}>delete</div>
                </div>
                <div className="full-note">
                    <div className="full-title">{this.props.note.title}</div>
                    <div className="full-body">{this.props.note.textBody}</div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.note,
        fetching: state.fetching,
    };
};

export default connect(mapStateToProps, { fetchNote, fetchNotes, deleteNote })(NotePage);