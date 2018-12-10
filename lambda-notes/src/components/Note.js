import React from 'react';

class Note extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: this.props.notes
        }
    }

   render() {
    
    const note = this.props.notes.find( note  => { return this.props.match.params._id === `${note._id}`})
    console.log(note)
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.textBody}</p>

        </div>
    );
   }
};

export default Note