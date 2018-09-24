import React from 'react';

const Form = props => {
  const heading = "Generic Form";
  const buttonName = "Submit";

  return (
    <div className="main-container form">
      <h2>{heading}</h2>
      <form>
        <input
          type="text"
          name="title"
          maxLength="20"
          placeholder="Note Title"
          value={props.title}
          onChange={props.handleInputChange}
        />
        <textarea
          type="text"
          name="textBody"
          placeholder="Note Content"
          value={props.textBody}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleFormSubmit}>{buttonName}</button>
      </form>
    </div>
  );
}

export default Form;