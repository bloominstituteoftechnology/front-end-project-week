import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions/index';
import Note from './Note'; 

class Notes extends Component {
    render() {
        return (
            <div>
                <h3>Your Notes:</h3>
                <div>
                    {this.props.notes.map(note => (
                        <Note note={note} />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state
    }
}

export default connect(mapStateToProps, { getNotes })(Notes);