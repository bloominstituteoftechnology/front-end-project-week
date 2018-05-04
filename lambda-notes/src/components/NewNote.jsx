import React from 'react';

export const NewNote = ({ handleChange, handleSubmit, history, text, title }) => {
  const submit = async (e) => {
    e.preventDefault();
    await handleSubmit();
    history.push('/');
  };

  return (
    <div>
      <h2>Create New Note</h2>
      <form onSubmit={submit}>
        <input
          className="NewTitle"
          placeholder="Note Title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <input
          className="NewText"
          placeholder="Note Content"
          name="text"
          value={text}
          onChange={handleChange}
        />
        <button className="SaveButton" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
