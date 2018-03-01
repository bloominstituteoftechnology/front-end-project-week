import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
    font-family: Raleway, sans-serif;
    letter-spacing: 1px;
    font-size: 1.4rem;
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
    line-height: 180%;
  }

  button {
    margin-left: 10px;
  }

`;

class PostForm extends React.Component {
  state = {
    title: '',
    body: '',
    redirect: false,
  }

  parseDate = () => {
    const a = new Date().toString().split(' ').slice(0, 5);
    const b = a.splice(4, 1);
    return `${a.join(' ')} ${b[0].split(':').slice(0, 2).join(':')}`;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNote({
      ...this.state,
      stamp: this.parseDate(),
      created: Date.now(),
    });
    this.setState({
      title: '',
      body: '',
      redirect: true,
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
            placeholder='Title (required, 40 chars max)...'
            maxLength='40'
            required
            onChange={this.handleChange}
            value={this.state.title}
          />
          <textarea
            className='form__textarea'
            type='text'
            name='body'
            placeholder='Content (required, 1500 chars max)...'
            maxLength='1500'
            required
            onChange={this.handleChange}
            value={this.state.body}
          />
          <Button type='submit' backgroundColor='rgb(34, 170, 61)' title='Save' />
        </form>
        {this.state.redirect ? <Redirect to='/' /> : null}
      </StyledForm>
    );
  }
}

export default connect(null, { addNote })(PostForm);
