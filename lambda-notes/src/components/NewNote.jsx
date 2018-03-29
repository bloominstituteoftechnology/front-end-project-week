import React from 'react';

export const NewNote = (props) => (
  <div>
    <h2>Create New Note</h2>
    <form>
      <input className="NewTitle" placeholder="Note Title" name="title" value={props.title} onChange={props.handleChange}/>
      <input className="NewText" placeholder="Note Content" name="text" value={props.text} onChange={props.handleChange}/>
      <button className="SaveButton" type="submit">Save</button>
    </form>
  </div>
);

