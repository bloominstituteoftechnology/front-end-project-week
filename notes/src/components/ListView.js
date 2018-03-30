import React from 'react';
import { connect } from 'react-redux';
import NoteCard from './NoteCard'
import './ListView.css';

const ListView = (state) => (
  <div className="listContainer">
    <h2 className="listHeader">Your Notes:</h2>
    <div className="listBody">
        {state.noteData.notes.map((note) =>
          <NoteCard key={note.id} {...note} />
        )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  noteData: state,
});

export default connect(mapStateToProps)(ListView);
