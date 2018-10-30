import React from 'react';


class NoteList extends React.Component {
    
routeToNote(event, id){
    event.preventDefault();
    this.props.history.push(`/note/${id}`);
}

render(){

    if (!this.props.notes) {
        return (<h1>Loading notes...</h1>)
    } else {
    return(
        
        <div className="note-list-wrapper">
        <h2>Your Notes:</h2>
        <div className="note-list">
        {this.props.notes.map(note => (
                <div className="note" key={note._id}
                onClick={event=> this.routeToNote(event, note._id)}
                >
                  <h3 className="note-title">{note.title}</h3>
<h4 className="note-text">{note.textBody}</h4>
                </div> 
        ))}       
        </div>
        </div>
    )
}
}
}

export default NoteList;