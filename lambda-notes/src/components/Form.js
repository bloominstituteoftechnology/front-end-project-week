import React from 'react';
import '../App.css';

const Form = props => {
  return (
    <div className="main-container form">
      <h2>Create New Note:</h2>
      <form>
        <input
          className="title"
          type="text"
          name="title"
          placeholder="Note Title"
          value={props.title}
          onChange={props.handleInputChange}
        />
        <textarea
          className="text-body"
          type="text"
          name="textBody"
          placeholder="Note Content"
          value={props.textBody}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleFormSubmit}>Save</button>
      </form>
    </div>
  );
}

export default Form;
