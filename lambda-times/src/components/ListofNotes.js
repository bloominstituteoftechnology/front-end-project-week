import React from 'react';
import Note from './Note';


export default class ListOfNotes extends React.Component {


    render() {
        return (
            <div className="notes-container">
            {this.props.state.notes.map(note => (
                <Note 
                    notes={this.props.state.notes}
                    title={note.title}
                    id={note._id}
                    textBody={note.textBody}
                    key={note._id}
                    props={this.props} />
            ))}
            </div>
        )
    }
}