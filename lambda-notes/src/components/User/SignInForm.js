import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signin } from '../../actions';

const StyledSignInForm = styled.div`
  display: flex;
  form {
    display: flex;
    flex-direction: column;    
  }
  input {
    width: 340px;
    height: 40px;
    margin-top: 15px;
    padding: 8px;
    margin-left: 10px;
    border-radius: 2px;
    border: 1px solid #bfbfc0;
    font-size: 1rem;
    letter-spacing: 1px;    
    &:focus {
      outline: none;
    }
  }
  button {
    margin-left: 10px;
    margin-top: 5px;
    height: 50px;
    margin-bottom: 20px;
  }
`;

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.confirmPassword !== this.state.password) {
      alert('Passwords do not match');
      return;
    }
    if (this.state.password.length < 8) {
      alert('Password must be eight or more characters in length');
      return;
    }
    this.props.signin({
      // trim() removes white space
      email: this.state.email.trim(),
      password: this.state.password.trim(),
    });
    this.setState({
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <StyledSignInForm>
        <form onSubmit={this.handleSubmit}>
          <input
            className='form__input'
            type='email'
            name='email'
            placeholder='Email'
            maxLength='30'
            required
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            className='form__input'
            type='password'
            name='password'
            placeholder='Password'
            minLength='8'
            maxLength='20'
            required
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input
            className='form__input'
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            maxLength='15'
            required
            onChange={this.handleChange}
            value={this.state.confirmPassword}
          />
          <button type='submit' background='rgb(34, 170, 61)' title='Register'>Button</button>
        </form>
      </StyledSignInForm>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { signin })(SignInForm);