import React from 'react';
import Note from './Note';

class Notes extends React.Component {
    componentDidMount(){
        console.log('notesprops', this.props);
    }
    render() {
        return (
            <div>
                <h1>Your Notes</h1>
                <div className="note-container">
                    {this.props.notes.map(note => {
                        return (
                            <div key={note._id} className="notes">
                            <Note note={note}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Notes;