import React from 'react';
import NoteList from './NoteList.js';

// const CreateNew = () => <h1>Create New Note</h1>;

const CreateNew = () => {

return (
    <div>
<input
type="text"
value={this.note}
onChange={this.handleNoteChange}
/>
<button onClick={this.handleAddNote}>Submit Note</button>
<NoteList
removeNote={this.handleRemoveNote}
noteList={this.noteList}
/>
</div>
  );
};

export default CreateNew ;