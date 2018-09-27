import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '../styles';

const Form = styled.form`
  max-width: 40rem;
  /* margin: 0 auto;
  text-align: center; */
`;

const Heading = styled.h2`
  margin-bottom: 3rem;
`;

const Label = styled.label`
  position: absolute;
  top: 1rem;
  left: 1rem;
  transform-origin: left;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  border: 2px solid transparent;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  font-size: inherit;
  color: inherit;
  font-family: inherit;
  transition: all 0.2s;

  &:focus {
    border-bottom-color: #26a69a;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    outline: none;
  }

  &::placeholder {
    color: #bdbdbd;
  }

  &:not(:placeholder-shown) + ${Label} {
    transform: translateY(-3rem) scale(0.8);
    opacity: 1;
    visibility: visible;
  }
`;

const Wrapper = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  render() {
    return (
      <Form>
        <Heading>Login</Heading>
        <Wrapper>
          <Input type="email" name="email" placeholder="@Email" />
          <Label>@Email</Label>
        </Wrapper>
        <Wrapper>
          <Input type="password" name="password" placeholder="#Password" />
          <Label>#Password</Label>
        </Wrapper>
        <Button type="submit">Login</Button>
      </Form>
    );
  }
}

export default Login;
