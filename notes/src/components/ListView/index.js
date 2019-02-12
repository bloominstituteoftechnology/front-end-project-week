import React from "react";
import PropTypes from "prop-types";

import NoteCard from "../NoteCard";
import Sorting from "../Sorting";
import "./listview.css";

class ListView extends React.Component {
  render() {
    return (
      <section className="listview">
        <h1>Your Notes:</h1>
        <br />
        <Sorting />
        <div className="notes-container">
          {this.props.notes.map(note => {
            return (
              <NoteCard
                key={note.id + note.title + Math.random()}
                note={note}
              />
            );
          })}
          {!this.props.notes.length && !this.props.fetching ? (
            <h2 className="loading">
              No Current Notes that match this search.
            </h2>
          ) : null}
          {this.props.fetching ? (
            <h2 className="loading">Loading Notes...</h2>
          ) : null}
        </div>
      </section>
    );
  }
}

ListView.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListView;
