import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NotesList.css';

class NotesList extends Component {
    render() {
        return (
            <div className='contentWrap'>
                <h2 className='contentHeader'>Your Notes:</h2>
                <div className='notesList'>                    
                    {this.props.notes.map(n => {
                        return (
                            <div className='noteCard'>
                                <h3>{n.title}</h3>
                                <hr></hr>
                                <p>{n.body}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mStP = (s) => {
    return {
        notes: s
    }
}

export default connect(mStP, {})(NotesList);