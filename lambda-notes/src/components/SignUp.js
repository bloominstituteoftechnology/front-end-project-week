import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../actions';
import { Button, Form } from 'reactstrap';
import './SignUp.css';

class SignUp extends Component {
  handleFormSubmit(
    firstName,
    lastName,
    username,
    email,
    password,
    confirmPassword
  ) {
    // console.log('form', firstName, lastName, username, 'form');
    console.log(
      firstName.firstName,
      firstName.lastName,
      firstName.email,
      firstName.username,
      firstName.password,
      firstName.confirmPassword
    );

    this.props.register(
      firstName.firstName,
      firstName.lastName,
      firstName.email,
      firstName.username,
      firstName.password,
      firstName.confirmPassword,
      this.props.history
    );
  }

  renderAlert = () => {
    if (!this.props.error) return null;
    return <h5>{this.props.error}</h5>;
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="h3 font-weight-bold mt-5 mb-5">
          Sign Up For Lambda Notes!
        </div>
        <fieldset>
          <Field
            className="form-control form-control-lg"
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </fieldset>
        <fieldset>
          <Field
            className="form-control form-control-lg"
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </fieldset>
        <fieldset>
          <Field
            className="form-control form-control-lg"
            name="email"
            component="input"
            type="text"
            placeholder="Email"
          />
        </fieldset>
        <fieldset>
          <Field
            className="form-control form-control-lg"
            name="username"
            component="input"
            type="text"
            placeholder="Username"
          />
        </fieldset>
        <fieldset>
          <Field
            className="form-control form-control-lg"
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </fieldset>
        <fieldset>
          <Field
            className="form-control form-control-lg"
            name="confirmPassword"
            component="input"
            type="password"
            placeholder="Confirm Password"
          />
        </fieldset>
        <Button className="reg-btn" action="submit">
          Register
        </Button>
        <br />
        <br />
        {this.renderAlert()}
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error
  };
};

SignUp = connect(mapStateToProps, { register })(SignUp);

export default reduxForm({
  form: 'signup',
  fields: [
    'username',
    'firstName',
    'lastName',
    'email',
    'password',
    'confirmPassword'
  ]
})(SignUp);
