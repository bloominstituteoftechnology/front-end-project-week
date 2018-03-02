import React from 'react';
import { connect } from 'react-redux';

import Note from './Note';

import './css/NotesList.css';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="notes-list">
        <h1 className="notes-header"> Results From Search: </h1>
        {this.props.results.length === 0 ? (
          <h1 className="notes-header">No Results</h1>
        ) : (
          <ul className="notes">
            {this.props.results.map((note, index) => {
              return <Note key={note.id} note={{ ...note, index: index }} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.results,
  };
};

export default connect(mapStateToProps, null)(SearchResults);
