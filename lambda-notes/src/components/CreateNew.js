import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';
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
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
}

onSubmit = (values) => {
  console.log(values);
  this.props.createPost(values, () => {
    this.props.history.push('/');
  });
}

  render() {
  const { handleSubmit } = this.props;

    return (
      <div className="parentContainer">
        <h1>Create New Note</h1>
        <div className="mainContainer">
          <div className="noteForm">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field
                label="Title"
                name="title"
                component={this.renderField}
              />
              <Field
                label="Categories"
                name="categories"
                component={this.renderField}
              />
              <div className="mainContent">
              <Field 
                className="noteContent"
                label="Post Content"
                name="content"
                component={this.renderField}
              />
              </div>
              <button 
              type="submit" 
              className="saveButton">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a Title";
  }

  if (!values.content) {
    errors.content = "No Content!";
  }
  //if errors is empty, the form is fine to submit.
  return errors;
}

export default reduxForm({
  validate,
  form: 'CreateNewForm'
})(
  connect(null, { createPost })(CreateNew)
);