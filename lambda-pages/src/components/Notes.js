import React, { Component } from 'react';
import NoteCard from './NoteCard';

class Notes extends Component {
  render() {
    const FilterResults = this.props.FilterResults;
    const fuseConfig = {
      keys: ['title', 'content']
    };
    const { notes } = this.props;
    return (
      <FilterResults items={notes} fuseConfig={fuseConfig}>
        {filteredItems => {
          return (
            <>
              {filteredItems.map((note, index) => (
                <NoteCard
                  index={index}
                  key={note.id}
                  note={note}
                  handleRedirectToNoteView={this.props.handleRedirectToNoteView}
                />
              ))}
            </>
          );
        }}
      </FilterResults>
    );
  }
}

export default Notes;
