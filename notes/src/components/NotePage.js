import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import { fetchNote, deleteNote } from '../actions';
import Note from './Note';

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
        this.props.deleteNote(id);
        this.setState({ deleted: true })
    }

    render() {
        let id = this.props.match.params.id
        return this.state.deleted ?
        <Redirect to='/' /> :
        (
            <div className='note-page'>
                <div className='note-btns'>
                    <Link to={`/${id}/edit`}>Edit</Link>
                    <div className='note-btn' onClick={() => this.deleteNote(id)}>Delete</div>
                </div>
                <Note note={this.props.note}/>
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

export default connect(mapStateToProps, { fetchNote, deleteNote })(NotePage);