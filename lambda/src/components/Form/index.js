import React from 'react';
import '../components.css';
import styled from 'styled-components';

const Form = props => {
  const heading = props.type === 'new' ? 'Create New Note:' : 'Edit Note:';
  const buttonName = props.type === 'new' ? 'Save' : 'Update';

  return (
    <div className="main-container form">
      <h2>{heading}</h2>
      <CreateForm>
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
      </CreateForm>
    </div>
  );
};

const CreateForm = styled.form`
  input {
    border-radius: 3px;
    border: 1px solid #979797;
    margin-bottom: 20px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    width: 350px;
    height: 40px;
  }

  textarea {
    width: 660px;
    height: 350px;
    margin-bottom: 20px;
    overflow-wrap: break-word;
    resize: none;
    border-radius: 3px;
    border: 1px solid #979797;
    font-size: 14px;
    padding: 15px !important;
  }
`;

export default Form;
