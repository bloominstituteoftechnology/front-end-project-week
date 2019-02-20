import React, { Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import Speech from './Speech'

const NoteForm = ({ handleSubmit }) => <Fragment>
  <h2>Edit Note:</h2>
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
      name='text'
      placeholder='Note Content'
      type='text'
    />
    <button className='button'>Save</button>
  </form>
  <Speech />
</Fragment>

const stateToProps = ({ notes: { transcript } }, { location: { title, text } }) =>
  ({ initialValues: { title, text: text + ' ' + transcript } })

/* Fix: speech transcript persisting through different notes + Create form */

export const Edit = compose(
  connect(stateToProps),
  reduxForm({ form: 'Note' }),
)(NoteForm)