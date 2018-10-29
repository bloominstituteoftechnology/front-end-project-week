import React, { Component } from "react";
import { connect } from "react-redux";
import Note from './Note';
// render edit & delete btns, sidebar, and the correct note
class NotePage extends Component {
    constructor() {
        super();
    }

    render() {
        let note = this.props.notes.find(note => note._id === this.props.match.params.id)
        return (
            <Note note={note}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    };
};

export default connect(mapStateToProps)(NotePage);