import React from 'react';

export const NewNote = () => (
  <div>
    <h2>Create New Note</h2>
    <form>
      <input className="NewTitle" placeholder="Note Title" />
      <input className="NewText" placeholder="Note Content" />
      <button className="SaveButton" type="submit">Save</button>
    </form>
  </div>
);