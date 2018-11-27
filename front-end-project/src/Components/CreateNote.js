import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	h2 {
		margin-bottom: 20px;
		font-weight: bold;
		font-size: 30px;
	}`;

const Form = styled.form`
 
  input, textarea {
    margin-bottom: 20px;
    border: 1px solid #B7B5B7;
    border-radius: 3px;
    font-size: 16px;
    padding: 15px 10px;
  }

  input {
    width: 50%;
    height: 40px;
  }

  textarea {
    width: 100%;
    height: 500px;
  }`;
  
const Button = styled.button`
  width: 30%;
  color: white;
  padding: 15px 0;
  margin: 10px 0;
  background-color: #33CAFF;
  font-size: 1.6rem;
  a {
    color: #FFF;
  }`;

const CreateNote = props => {
  return (
    <Container>
      <h2>Create New Note:</h2>
      <Form onSubmit={props.addNote}>

        <input
          type="text"
          placeholder="Note Title"
          onChange={props.handleInput}
          name="title"
          value={props.title}
        />

				<textarea
					type="text"
					placeholder="Note Placeholder"
					onChange={props.handleInput}
					name="textBody"
					value={props.textBody}
				/>

				<Button type="SUBMIT">Save</Button>
			</Form>
		</Container>
	);
}

export default CreateNote;
