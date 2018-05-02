import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './css/SigninView.css';

export default class SigninView extends React.Component {
  constructor() {
    super();
    this.state = {
      userField: {
        username: '',
        password: ''
      }
    };

    this.handleSub = this.handleSub.bind(this);
    this.handleIn = this.handleIn.bind(this);
  }

  render() {
    return (
      <div className="formBox">
        <div className="content">
          <p>Submit to sign into the system</p>
        </div>
        <Form className="form">
          <FormGroup className="form__elem">
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter email here"
            />
          </FormGroup>
          <FormGroup className="form__elem">
            <Label for="exampleEmail">Email</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter password here"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }

  handleSub(event) {
    event.preventDefault();
    console.log(this.props.notes);
  }

  handleIn(event) {
    const { name, value } = event.target;
    this.setState({
      userField: {
        [name]: value
      }
    });
  }
}
