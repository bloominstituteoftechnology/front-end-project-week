import React from 'react'
import { Field, reduxForm } from 'redux-form'

let EditForm = ({
  handleSubmit
}) => (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="title"
          component="input"
          type="text"
          placeholder="Note Title"
        />
      </div>
      <div>
        <Field
          name="body"
          component="textarea"
          placeholder="Note Content"
        />
      </div>
      <div><button>Update</button></div>
    </form>
  )

EditForm = reduxForm({
  form: 'update'
})(EditForm)

export default EditForm