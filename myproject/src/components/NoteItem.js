import React from 'react';


export default class NoteItem extends React.Component {
    addNote(id) {
        this.props.addNote(id);
    }

    removeNote(id) {
        this.props.removeNote(id);
    }

    render () {
        return (
            <div className="noteWrapper">
                <button className="removeNote" onClick={(e) => this.removeNote(this.props.id)}>remove</button>{this.props.Note}
            </div>
        )
    }
}