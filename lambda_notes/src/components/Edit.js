import React, { Fragment } from 'react'

export const Edit = (props) => {
  const { change, history, id, submit, text, title } = props
  console.log(props);

  const handleSubmit = e => {
    e.preventDefault()
    submit(id)
    history.push('/')
  }

  return (
  <Fragment>
    <h2>Edit Note:</h2>
    <form className="Form" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Note Title" onChange={change} value={title}></input>
      <textarea type="text" name="text" placeholder="Note Content" onChange={change} value={text}></textarea>
      <button className="button" type="submit">Save</button>
    </form>
  </Fragment>
)}