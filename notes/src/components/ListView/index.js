import React from "react";
import PropTypes from "prop-types";

import NoteCard from "../NoteCard";
import './listview.css';

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }
  }
  render() {
    const notes = this.props.notes;
    return (
      <section className='listview'>
        <h1>Your Notes:</h1>
        <br />
        <div className='notes-container'>
        {notes.map(note => {
          return <NoteCard key={note.id + note.title} note={note} />;
        })}
      </div>
      </section>
    );
  }
}

ListView.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListView;
