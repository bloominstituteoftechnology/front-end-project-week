import React from 'react';

class NoteView extends React.Component {
    render() {
        return (
            <div>
                {this.props.notes.map(note => {
                    if (this.props.match.params.id === `${note._id}`) {
                        return (
                            <div>
                                {note.title}
                                {note.textBody}
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
};

export default NoteView;