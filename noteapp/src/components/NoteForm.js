import React from 'react';

const NoteForm = () => {
  return (
    <div>
      <form>
        <label>Create New Note:</label>
        <input type="text" />
        <input type="textarea" />
        <button>Save</button>
      </form>
    </div>
  );
};

export default NoteForm;

// class NoteForm extends Component
