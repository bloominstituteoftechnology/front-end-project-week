import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {
  UncontrolledAlert,
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';

class LogIn extends React.Component {
  constructor () {
    super ();
    this.state = {
      username: '',
      password: '',
      state: 0,
    };
  }
  componentDidMount () {
    localStorage.setItem ('location', this.props.location.pathname);
  }
  onChangeHandler = e => {
    this.setState ({[e.target.name]: e.target.value});
  };
  onSubmitHandler = e => {
    e.preventDefault ();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post ('https://notes-lambda.herokuapp.com/api/login', user)
      .then (res => {
        localStorage.setItem ('id', res.data.user_id);
        localStorage.setItem ('jwt', res.data.token);
        localStorage.setItem ('location', '/notes');
        this.props.history.push ('/notes');
      })
      .catch (err => this.setState ({state: 1, username: '', password: ''}));
  };
  render () {
    return (
      <Container className="logIn">
        <h2>Log In</h2>
        {this.state.state === 1
          ? <UncontrolledAlert
              color="primary"
              onClick={() => this.setState ({state: 0})}
            >
              Those credentials are invalid.
            </UncontrolledAlert>
          : null}
        <Form>
          <Col>
            <FormGroup>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Button type="submit" onClick={this.onSubmitHandler}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
export default withRouter (LogIn);
