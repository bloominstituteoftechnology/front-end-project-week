import React from 'react';

class SignUp extends Component {
  handleFormSubmit({ username, password, confirmPassword }) {
    this.props.register(username, password, confirmPassword, this.props.history);
  }

  renderAlert = () => {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div>Sign Up</div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset>
            <label>Username:</label>
            <Field name="username" component="input" type="text" />
          </fieldset>
          <fieldset>
            <label>Password:</label>
            <Field name="password" component="input" type="password" />
          </fieldset>
          <fieldset>
            <label>Confirm Password:</label>
            <Field name="confirmPassword" component="input" type="password" />
          </fieldset>
          <button action="register">Sign Up</button>
          {this.renderAlert()}
        </form>
      </div>
    );
  }
}
