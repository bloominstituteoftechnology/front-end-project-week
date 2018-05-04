import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../App.css';
import { getNote, deleteNote } from '../Action';

// const id=this.props.match.params.id;

class Note extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getNote(id);
    }

    handleDelete = (id) => {
        this.props.deleteNote(id);
    }

    render() {
        return (
            <div className="note-container">
            <button onClick={() => {this.handleDelete(this.props.note.id)}} className="feature-button">delete</button>
            <button className="feature-button">edit</button>
                <h2 className="note-title"> {this.props.note.title} </h2>
                <p className="note-content"> {this.props.note.content} </p>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        note: state.note,
    }
}

export default connect(mapStateToProps, { getNote, deleteNote })(Note);