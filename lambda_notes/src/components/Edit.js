import React, { Fragment } from 'react'

export const Edit = ({ db, history, id, submit, text, title }) => {
  let inputText
  let inputTitle

  const handleSubmit = e => {
    e.preventDefault()
    const note = {
      db,
      id,
      text: inputText.value,
      title: inputTitle.value,
    }
    submit(note)
    history.push('/')
  }

  return (
    <Fragment>
      <h2>Edit Note:</h2>
      <form className="Form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Note Title"
          defaultValue={title}
          ref={node => inputTitle = node}
        />
        <textarea
          type="text"
          placeholder="Note Content"
          defaultValue={text}
          ref={node => inputText = node}
        />
        <button className="button" type="submit">
          Save
        </button>
      </form>
    </Fragment>
  )
}
