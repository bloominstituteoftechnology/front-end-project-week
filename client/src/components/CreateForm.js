import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { CustomInput } from './fields'
import { required } from './validation'

let CreateForm = ({
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
      <button className="mainBtn mainContentBtn">Save</button>
    </form>
  )

CreateForm = reduxForm({
  form: 'create',
})(CreateForm)

export default CreateForm