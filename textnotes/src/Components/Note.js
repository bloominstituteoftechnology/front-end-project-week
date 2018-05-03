import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../App.css';
import { getNote } from '../Action';

// const id=this.props.match.params.id;

class Note extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getNote(id);
    }

    render() {
        return (
            <div className="note-container">
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

export default connect(mapStateToProps, { getNote })(Note);