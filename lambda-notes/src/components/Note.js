import React from 'react';

class Note extends React.Component {
    
render(){
 return(
 <div className="note">
    <h3 className="note-title">{this.props.note.title}</h3>
<h4 className="note-text">{this.props.note.textBody}</h4>
    </div>
 )
}
}

export default Note;