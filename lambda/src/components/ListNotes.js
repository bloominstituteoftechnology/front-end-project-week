import React, { Component } from'react';

export default class ListNotes extends Component {

    shouldComponentUpdate = nextProps => {
        if(nextProps.notes !== this.props.notes) return true
    }
    render = () => {
        return (
            <div class="ListNotes">
            <div>
                <h2>Your Notes</h2>
                <div className='notes'>
                {
                    this.props.notes.map((note, i) => {
                        const { id, title, text } = note;
                        <Note
                        key={id}
                        id={id}
                        index={i}
                        title={title}
                        text={text }
                        completed={completed} />
                    })
                }
                </div>
            </div>
        </div>
        );
    }

    const mSTP = state => {
        return {
            notes
        }
    }
}




