import React from 'react';

import Note from './Note'
import '../../App.css'

class ListView extends React.Component {
    render() {
      return (
        <div className="listViewContainer">
            <h2 className="notesHeader">Your Notes:</h2>
            <div className="listView">
                {this.props.notes.map(note => {
                    return(
                        <Note key={note.id} id={note._id} title={note.title} text={note.textBody} />
                    )
                })}
            </div>
        </div>
      );
    }
  }
  
  export default ListView;