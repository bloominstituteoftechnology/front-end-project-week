import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../../actions';

const StyledLoginForm = styled.div`
  display: flex;
  margin-top: 20px;
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
  }
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login({
      username: this.state.username.trim(),
      password: this.state.password.trim(),
    }, this.props.history);
    this.setState({
      username: '',
      password: '',
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <StyledLoginForm>
        <form onSubmit={this.handleSubmit}>
          <input
            type='username'
            name='username'
            placeholder='Username'
            maxLength='30'
            required
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            minLength='8'
            maxLength='20'
            required
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type='submit' background='rgb(34, 170, 61)' title='Login'>Button</button>
        </form>
      </StyledLoginForm>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { login })(LoginForm);