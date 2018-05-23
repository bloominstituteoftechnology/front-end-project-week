import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addNote, editNote } from '../actions';

const routeView = 'Note View'

class Note extends Component {
    state = {
        notes: []
    }

    render() {
        console.log(this.props.notes)
        return (
            <Link to={`/note/${this.props.notes.id}`}>
                <div>
                    <h4>{this.props.notes.title}</h4>
                    <p>{this.props.notes.body}</p>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { addNote, editNote })(Note);