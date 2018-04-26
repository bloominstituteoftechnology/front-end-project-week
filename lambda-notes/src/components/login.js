import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Tooltip } from 'reactstrap';
import { newUser } from '../REDUX/actions';
import { headShake } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const shakeAnimation = keyframes`${headShake}`;
const Wrapper = styled.section`
  animation: 1s ${shakeAnimation};
  text-align: center;
  `;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modal: true,
      username: "",
      tooltipUsername: false,
      loginError: false
    }
  }

  handleLogin = () => {
    this.state.username === "" ? this.setState({ loginError: true }) : null;
    this.props.newUser(this.state.username); // action creator 
    this.setState({ username: "" });
  }

  render() {
    return (
      <div className="PrimaryContainer__login">
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} className="w-100 d-flex justify-content-center">Login</ModalHeader>
          {this.state.loginError ? (
            <Wrapper>
              <ModalBody className="mx-auto text-danger">You must enter a username and password.</ModalBody>
            </Wrapper>
          ) : (
            <ModalBody className="mx-auto">Please login to view your notes.</ModalBody>
          )}
          <Form>
            <FormGroup className="mx-auto col-8">
              <Input type="text" name="username" id="tooltipUsername" placeholder="username" 
                onChange={event => this.setState({ [event.target.name]: event.target.value })}
              />
              <Tooltip placement="right" 
                  isOpen={this.state.tooltipUsername} 
                  target="tooltipUsername" 
                  toggle={() => this.setState({ tooltipUsername: !this.state.tooltipUsername })}>
                  Enter any username and password.
                </Tooltip>
            </FormGroup>
            <FormGroup className="mx-auto mb-4 col-8">
              <Input 
                type="password" 
                name="password" 
                id="tooltipPassword" 
                placeholder="password" 
                />
            </FormGroup>
          </Form>
          <ModalFooter>
            <Link to={this.state.username !== "" ? "/home" : ""} onClick={() => this.handleLogin()}>
              <Button 
                color="primary" 
                className="Nav__ButtonsContainer--navButton"  
              >Login</Button>
            </Link>
            <Button color="danger" onClick={null}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({ username: state.username });

export default connect(mapStateToProps, { newUser })(Login);
// export default Login;