import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { CustomInput } from './fields'
import { required } from './validation'

let EditForm = ({
  handleSubmit
}) => (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="title"
          component={CustomInput}
          type="text"
          placeholder="Note Title"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name="body"
          component={CustomInput}
          type="textarea"
          placeholder="Note Content"
          validate={[required]}
        />
      </div>
      <div><button>Update</button></div>
    </form>
  )

EditForm = reduxForm({
  form: 'update'
})(EditForm)

export default EditForm