import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// COMPONENTS
import NOTEVIEW from './NoteView';

export default class ListView extends Component {
  constructor (props){
    console.log('ListView props: ' , props);
    super(props)
    this.state={
      notes: []
    }
  }

  render() {
    console.log('ListView render props: ' ,this.state.notes);
    return (
      <div className="APP__LISTVIEW">
          <h2 className="APP__LISTHEADER">Your Notes:</h2>
          {this.state.notes.map((note, index) => {
            return(
                <Link className="text-muted" to={`/note/${note.id}`} component={NOTEVIEW}>
                  <ANote key={index} note={note} />
                </Link>
            );
          })}
      </div>
    );
  };
};

function ANote(props) {
  const { title, text } = props.note;
  return (
    <div className="APP__NOTECARD">
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  )
};
