import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {
  UncontrolledAlert,
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      state: 0
    };
  }
  componentDidMount() {
    localStorage.setItem("location", this.props.location.pathname);
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("https://notes-lambda.herokuapp.com/api/register", newUser)
      .then(res => {
        localStorage.setItem("id", res.data.user_id);
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("location", "/notes");
        this.props.history.push("/notes");
      })
      .catch(err => {
        if (err.message === "Request failed with status code 400") {
          this.setState({ state: 1, username: "", password: "" });
        } else if (err.message === "Request failed with status code 409") {
          this.setState({ state: 2, username: "", password: "" });
        }
      });
  };
  render() {
    return (
      <Container className="signUp">
        <h2>Sign Up</h2>
        {this.state.state === 1 ? (
          <UncontrolledAlert
            onClick={() => this.setState({ state: 0 })}
            color="danger"
          >
            Invalid field(s). Username and password must be at least 3
            characters long.
          </UncontrolledAlert>
        ) : null}
        {this.state.state === 2 ? (
          <UncontrolledAlert
            onClick={() => this.setState({ state: 0 })}
            color="danger"
          >
            That username is already in use.
          </UncontrolledAlert>
        ) : null}
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
export default withRouter(SignUp);
