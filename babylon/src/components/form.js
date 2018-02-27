import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import Button from './button';

const StyledForm = styled.div`
  display: flex;

  form {
    display: flex;
    flex-wrap: wrap;
  }

  input, textarea {
    margin-left: 10px;
    border-radius: 3px;
    border: 1px solid #bfbfc0;     
    &:focus {
      outline: none;
    }
  }

  textarea {
    resize: none;
  }

  .form__input {
    width: 340px;
    height: 40px;
    margin-top: 20px;
    padding: 8px;
  }

  .form__textarea {
    width: 560px;
    height: 330px;
    margin-top: 10px;
    padding: 12px;
  }

  button {
    margin-left: 10px;
  }

`;

class Form extends React.Component {
  state = {
    title: '',
    body: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: '',
      body: '',
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <StyledForm>
        <form onSubmit={this.handleSubmit}>
          <input
            className='form__input'
            type='text'
            name='title'
            placeholder='Note Title'
            maxlength='40'
            required
            onChange={this.handleChange}
            value={this.state.title}
          />
          <textarea
            className='form__textarea'
            type='text'
            name='body'
            placeholder='Note Content'
            maxlength='1500'
            required
            onChange={this.handleChange}
            value={this.state.body}
          />
          <Button type='submit' backgroundColor='#5dbdc2' title='Save' />
        </form>
      </StyledForm>
    );
  }
}

export default connect(null, { addNote })(Form);
