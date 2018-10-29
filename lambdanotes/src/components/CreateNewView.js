import React from 'react';

import './ComponentStyle.css';

const CreateNewView = props => {
  return (
    <form>
      <h1>Create New Note:</h1>
      <input
        type="text"
        name="title"
        placeholder="Note Title"
        value={props.value}
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="content"
        placeholder="Note Content"
        value={props.value}
        onChange={props.handleChange}
      />
      <button>Save</button>
    </form>
  );
};

export default CreateNewView;
