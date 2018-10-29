import React, { Component } from 'react';

class NoteView extends Component {
    constructor(props) {
        super(propss);
        this.state = {
            title: '',
            textBody: ''
        }
    }

    render() {
        return (
            <div className='view-container'>
                <div className='view-nav'>
                    <button>edit</button>
                    <button>delete</button>
                </div>

                <div className='view-note'>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.textBody}</p>
                </div>
            </div>
        )
    }
}

export default NoteView;