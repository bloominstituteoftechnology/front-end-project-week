import React from 'react';

import Note from './Note'

class ListView extends React.Component {
    render() {
      return (
        <div className="listView">
            {this.props.notes.map(note => {
                return(
                    <Note key={note.id} id={note.id} title={note.title} text={note.textBody} />
                )
            })}
        </div>
      );
    }
  }
  
  export default ListView;