import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Note from "./Note";
import ListHeader from "./ListHeader";

const NotesList = props => {
  return (
    <div className="NotesList">
      <ListHeader />
      <div>
        <ul className="list">
          {props.notes
            .map(note => {
              return (
                <Link to={`/${note._id}`} id={note._id} key={note._id}>
                  <Note
                    title={note.title}
                    id={note._id}
                    textBody={note.textBody}
                    key={note._id}
                  />
                </Link>
              );
            })
            .reverse()}
        </ul>
      </div>
    </div>
  );
};

Note.defaultProps = {
  notes: []
};

NotesList.propTypes = {
  notes: PropTypes.array,
  title: PropTypes.string,
  textBody: PropTypes.string,
  _id: PropTypes.string
};
export default NotesList;
