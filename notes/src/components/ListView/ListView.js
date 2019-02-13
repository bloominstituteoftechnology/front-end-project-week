import React from 'react';

import Note from './Note'
import '../../App.css'

class ListView extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
      return (
        <div className="listViewContainer">
            <h2 className="notesHeader">Your Notes:</h2>
            <div className="listView">
                {this.props.notes.map(note => {
                    return(
                        <Note key={note.id} id={note.id} title={note.title} text={note.content} />
                    )
                })}
            </div>
        </div>
      );
    }
  }
  
  export default ListView;