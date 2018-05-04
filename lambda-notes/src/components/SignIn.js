import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { login } from '../actions';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';

class SignIn extends Component {
  handleFormSubmit({ username, password }) {
    this.props.login(username, password, this.props.history);
  }

  renderAlert() {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="h3 font-weight-bold mt-5 mb-5">
          Sign In To See Your Notes!
        </div>
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
        <Button className="reg-btn" action="submit">
          Sign In
        </Button>
        {this.renderAlert()}
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated
  };
};

SignIn = connect(mapStateToProps, { login })(SignIn);

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
})(SignIn);
