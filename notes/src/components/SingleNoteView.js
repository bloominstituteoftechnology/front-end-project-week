import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleNoteView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        if(this.props.notes.length > 0) {
        return (
            <div>
                <div className="singleNoteView">
                    <div className="singleLinks">
                        <Link to={`/notes/${this.props.match.params.id}/edit`}>edit</Link>
                        &nbsp;<Link to="">delete</Link>
                    </div>
                    <h2 className="singleNoteTitle">{this.props.notes[this.props.match.params.id].title}</h2>
                    <p className="singleNoteText">{this.props.notes[this.props.match.params.id].textBody}</p>
                </div>
            </div>
        )
    } else return (<div>Loading...</div>)
    }
}

export default SingleNoteView;