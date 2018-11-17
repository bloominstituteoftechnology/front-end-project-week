import React from "react";
import PropTypes from "prop-types";

import NoteCard from "../NoteCard";
import Sorting from '../Sorting';
import './listview.css';

class ListView extends React.Component {
  render() {
    return (
      <section className='listview'>
        <h1>Your Notes:</h1>
        <br />
        <Sorting />
        <div className='notes-container'>
        {this.props.notes.map(note => {
          return <NoteCard key={note.id + note.title + Math.random()} note={note} />;
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
