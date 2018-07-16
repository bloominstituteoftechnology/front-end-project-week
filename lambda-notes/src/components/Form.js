import React from 'react';
import '../App.css';

const Form = props => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Note Title"
          value={props.title}
          onChange={props.handleInputChange}
        />
        <input
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
