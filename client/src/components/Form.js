import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Form = ({
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
      <div><button>Save</button></div>
    </form>
  )

Form = reduxForm({
  form: 'create'
})(Form)

export default Form