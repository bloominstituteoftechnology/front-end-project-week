import React, { Component } from 'react';

class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    render() {
        return (
            <div>
                {this.props.notes.map(note => {
                    console.log(note);
                    if (this.props.match.params.id === note._id) {
                        return (
                            <div key={note._id}>
                                <p>{note.title}</p>
                                <p>{note.textBody}</p>
                            </div>
                        );
                    }
                })} 
            </div>
        );
    }
}

export default ViewNote;