import React from "react";
import {StyledButton} from './styles'
import styled from 'styled-components'



const StyledForm = styled.form`
  padding: 0 20px;
  background: #f9f9f9;
  width: 100%;
`

const StyledInput = styled.input`
     display: block;
  padding: 10px 10px;
  margin: 20px 0;
  width: 100%;
  height: 50px;
  font-size: 1.4rem;
  color: #111;
  border: 1px solid #ccc;
`
const TextArea = styled.textarea`
     display: block;
  padding: 10px 10px;
  width: 100%;
  height: 200px;
  font-size: 1.4rem;
  color: #111;
  border: 1px solid #ccc;
`

const Form = props => {
	return (
		<div>
			<StyledForm onSubmit={props.handleSubmit}>
				<StyledInput
					type="text"
					placeholder="Note Title"
					value={props.title}
					name="title"
                    autoComplete="off"
					onChange={props.handleInputChange}
				/>
				<TextArea
					name="body"
					placeholder="Note Content"
					value={props.body}
					onChange={props.handleInputChange}
				/>
				<StyledButton>{props.label}</StyledButton>
			</StyledForm>
		</div>
	);
};

export default Form;