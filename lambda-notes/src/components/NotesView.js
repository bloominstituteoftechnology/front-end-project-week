import React from 'react';

export default class NotesView extends React.Component {
    
    render(){
        return (
            <div className="cont-body">
          
            {this.props.notes.map(note => ( 
            <div onDoubleClick={() => this.props.history.push(`/note/${note._id}`)} className="note">
            
            <div className='note-title'>
                <h3>{note.title}</h3>
            </div>
            
            <div className="note-body">{note.textBody}</div>
            
            </div>
            
            )
            )}
            </div>
        )
    }
}