import React, { Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import Speech from './Speech'

const NoteForm = (props) => {
  const { handleSubmit } = props
  console.log(props)

  return <Fragment>
    <h2>Edit Note:</h2>
    <form className="Form" onSubmit={handleSubmit}>
      <Field
        component='input'
        name="title"
        placeholder="Note Title"
        type="text"
      />
      <Field
        component='textarea'
        name='content'
        placeholder="Note Content"
        type="text"
      />
      <button className="button">Save</button>
    </form>
    <Speech />
  </Fragment>
}

const stateToProps = (state) => {
  console.log(state)
  const { notes: { transcript } } = state
  return ({ initialValues: { content: transcript } })
}

export const Edit = compose(
  connect(stateToProps),
  reduxForm({ form: 'Note' }),
)(NoteForm)