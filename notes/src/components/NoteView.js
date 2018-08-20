import React from 'react';

class Note extends React.Component{
    render(){
        let note = this.props.notes.filter( note => note.id == this.props.match.params.id)[0];
        return(
            <div>
                <button>Edit</button>
                <button>Delete</button>
                <p>{note.title}</p>
                <p>{note.content}</p>
            </div>
        );
    }
}

export default Note;