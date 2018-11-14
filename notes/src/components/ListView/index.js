import React from "react";
import PropTypes from "prop-types";

import NoteCard from "../NoteCard";

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
      <section>
        {notes.map(note => {
          return <NoteCard key={note.id + note.title} note={note} />;
        })}
      </section>
    );
  }
}

ListView.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListView;
