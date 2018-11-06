
import React from 'react';


class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNote: '',
      notes: []
    }
  }


  render() { 
    const thisId = this.props.match.params.id.slice(1); 
    const thisNote = this.props.notes[thisId]
    
  return (
   
    <div>
      <h1>{thisNote.title}</h1>
      <p>{thisNote.textBody}</p>
    </div>
   )
  }
}

export default Note;