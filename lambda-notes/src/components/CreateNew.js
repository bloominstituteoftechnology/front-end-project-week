import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../styles/CreateNew.css';

class CreateNew extends Component {
  render() {
    return (
      <div>
      CreateNew
      </div>
    );
  }
}

export default reduxForm({
  form: 'CreateNewForm'
})(CreateNew);