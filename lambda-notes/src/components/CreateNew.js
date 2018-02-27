import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../styles/CreateNew.css';

class CreateNew extends Component {
  renderTitleField(field) {
    return (
      <div>
        <input 
          {...field.input}
        />
      </div>
    );
}

  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'CreateNewForm'
})(CreateNew);