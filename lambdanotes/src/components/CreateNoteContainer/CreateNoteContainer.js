import React, { Component } from 'react';

const CreateNoteContainer = (props) => {
  return (
    <div className="create-note-container">
      <p> Create New Note: </p>
      <form>
      <input type="text" />
      <input type="text" />
      </form>
    </div>
  );
};

export default CreateNoteContainer;
