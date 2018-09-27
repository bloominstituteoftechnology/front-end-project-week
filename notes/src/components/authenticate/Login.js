import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { logIn } from '../../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    console.log('CDM Login.js', this.props.isLoggedIn);
    // this.props.handleLoggedIn(this.props.isLoggedIn);
    // if (this.props.isLoggedIn) {
    //   this.props.handleLoggedIn(true);
    // } else {
    //   this.props.handleLoggedIn(false);
    // }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      this.props.handleLoggedIn(this.props.isLoggedIn);
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = (event) => {
    event.preventDefault();
    // console.log('login test');
    this.props.logIn(this.state.username, this.state.password);
    this.props.handleLoggedIn(this.props.isLoggedIn);
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Logo>
            Lambda <Span>Notes</Span>
          </Logo>
          <StyledForm>
            <StyledInput
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
            />
            <StyledInput
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              type="password"
            />
            <StyledButton onClick={this.login}>Login</StyledButton>
            <StyledLink to="/signup">Sign-up</StyledLink>
          </StyledForm>
        </Container>
        <BackGround />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('auth mapStateToProps', state);
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
    user: state.notesReducer.user,
  };
};

export default connect(
  mapStateToProps,
  { logIn }
)(Login);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const Logo = styled.h1`
  font-size: 3rem;
`;

const Span = styled.span`
  color: #b92626;
`;

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 12%;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  background: transparent;
  margin-top: 10px;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  background: #59b5bb;
  color: white;
  border: 1px solid #9cb1b3;
  height: 30px;
  width: 45%;
  text-align: center;
  line-height: 30px;
  font-size: 1rem;
  margin: 20px 0;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background: #59b5bb;
  color: white;
  border: 1px solid #9cb1b3;
  height: 30px;
  width: 45%;
  text-align: center;
  line-height: 30px;
  font-size: 1rem;
  margin: 20px 0;
`;

const BackGround = styled.div`
  border: 1px solid #c3c2c3;
  background: #f2f1f2;
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: -1;
  top: 0;
`;
