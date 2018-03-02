import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateNote } from '../actions';
import Button from './button';

const StyledUpdateForm = styled.div`
  display: flex;

  form {
    display: flex;
    flex-wrap: wrap;
  }

  input, textarea {
    margin-left: 10px;
    border-radius: 2px;
    border: 1px solid #bfbfc0;
    font-size: 1.4rem;
    letter-spacing: 1px;    
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

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.notes.find(val => val.id.toString() === this.props.id).title,
      body: this.props.notes.find(val => val.id.toString() === this.props.id).body,
      redirect: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateNote({
      id: this.props.id,
      title: this.state.title,
      body: this.state.body,
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
      <StyledUpdateForm>
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
          <Button type='submit' backgroundColor='rgb(34, 170, 61)' title='Update' />
        </form>
        {this.state.redirect ? <Redirect to={`/fullnote/${this.props.id}`} /> : null}
      </StyledUpdateForm>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { updateNote })(UpdateForm);
