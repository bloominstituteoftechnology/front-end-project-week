import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../styles/CreateNew.css';

class CreateNew extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input
          type="text" 
          {...field.input}
        />
      </div>
    );
}

  render() {
    return (
      <div>
        <h1>Create New Note</h1>
        <form>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Tags"
            name="tags"
            component={this.renderField}
          />
          <Field 
            label="Post Content"
            name="content"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'CreateNewForm'
})(CreateNew);