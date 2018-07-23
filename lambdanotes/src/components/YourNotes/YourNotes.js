import React, {Component} from 'react';
import Note from '../Note/Note.js'
import './YourNotes.css';

class YourNotes extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //       notes:[],
    //     };
    //   }
    render() {
        return (
            <div className='note-list'>
                <h1>Your Notes:</h1>
                {this.props.notes.map(note =>{
                    return (
                        <Note
                            title={note.title}
                            key={note.id}
                            content={note.content}
                        />
                    );
                })}
            </div>
        );
    }
}

YourNotes.defaultProps ={
    notes:[]
};
export default YourNotes;