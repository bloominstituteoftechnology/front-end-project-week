import React, { Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import Speech from './Speech'

const NoteForm = ({ handleSubmit }) => <Fragment>
  <h2>Create New Note:</h2>
  <form className='Form' onSubmit={handleSubmit}>
    <Field
      autoFocus
      component='input'
      name='title'
      placeholder='Note Title'
      type='text'
    />
    <Field
      component='textarea'
      placeholder='Note Content'
      name='text'
      type='text'
    />
    <button className='button'>Save</button>
  </form>
  <Speech />
</Fragment>

export const Create = compose(
  connect(({ notes: { transcript } }) => ({ initialValues: { text: transcript } })),
  reduxForm({ form: 'Note' }),
)(NoteForm)
