import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeNote, editNote } from '../actions';

class EditNote extends Component {
    state = {
        notes: []
    }

    

    render() {
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

export default connect(mapStateToProps, { editNote, removeNote })(EditNote);