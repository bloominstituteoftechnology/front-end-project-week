import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ViewNote from './ViewNote';
// import { Link } from 'react-router-dom';

class NoteList extends Component {
    render() {
    return (
        <div className="Notes">
        <Sidebar />
        {/* <Link to='/editNote'>Edit</Link> */}
            {this.props.note.map(note => {
                return (
                    <ViewNote 
                    title={note.title}
                    content={note.content}
                    id={note.id}
                    />
                );
            })};
        </div>
    )
}
}

export default NoteList;