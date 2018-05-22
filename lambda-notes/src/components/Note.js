import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote, editNote } from '../actions';

const routeView = 'Note View'

class Note extends Component {
    state = {
        notes: []
    }

    render() {
        console.log(this.props.notes)
        return (
            <div>
                <div>
                    <h4>{this.props.notes[0].title}</h4>
                    <p>{this.props.notes[0].body}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { addNote, editNote })(Note);