import React from 'react';
//import ReactDom from 'react-dom';
// import axios from 'axios';

import Note from './Note';

class NoteList extends React.Component {

    

    render() {
        return(
            <div className='note-list'>
                {this.props.content.map((note) => {
                    return <Note key={note.id} content = {note} />
                })}
                
            </div>
        )
    }
}

export default NoteList;