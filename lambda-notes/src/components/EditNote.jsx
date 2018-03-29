import React from 'react';

export const EditNote = (props) => (
  <div>
    <h2>Edit Note</h2>
    <form>
      <input className="EditTitle" placeholder="Edit Title" name="title" value={props.title} onChange={props.handleChange}/>
      <input className="EditText" placeholder="Edit Content" name="text" value={props.text} onChange={props.handleChange}/>
      <button className="SaveButton" type="submit">Update</button>
    </form>
  </div>
);