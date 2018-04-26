import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Styles.css';

// COMPONENTS
import NOTEVIEW from './NoteView';

// REDUX components
import { connect } from 'react-redux';
// import { fetchNotes } from '../actions';



class ListView extends Component {
  constructor (props){
    super(props)
    this.state={
      notes: props.notes,
    }
  }

  
  

  render() {
    return (
      <div className="APP__LISTVIEW">
        <h2 className="APP__LISTHEADER">Your Notes:</h2>
        <div className="APP__NOTELIST">
        {this.state.notes.map((note, index) => {
          return(
            <div key={`note${index}`}>
              <Link to={`/note/${index}`}>
                <ANote note={note} />
              </Link>
            </div>
          );
        })}
        </div>
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

export default connect()(ListView)