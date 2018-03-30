import React from 'react';

export const EditNote = ({ edit,  handleChange, history, id, text, title }) => {
  const submit = e => {
    e.preventDefault();
    edit(id);
    history.push('/');
  };

  return (
    <div>
      <h2>Edit Note</h2>
      <form onSubmit={submit}>
        <input className="EditTitle" placeholder="Edit Title" name="title" value={title} onChange={handleChange} />
        <input className="EditText" placeholder="Edit Content" name="text" value={text} onChange={handleChange} />
        <button className="SaveButton" type="submit">Update</button>
      </form>
    </div>
  )
};