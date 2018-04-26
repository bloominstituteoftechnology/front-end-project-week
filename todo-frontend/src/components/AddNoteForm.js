import React from 'react'
import PropTypes from 'prop-types'

/** @type React.StatelessComponent<{addNote}> */
export const AddNoteForm = props => (
  <form
    className="ATF"
    onSubmit={e => {
      const nodes = document.getElementsByClassName('ATF--input')

      // if an HTMLInputNode has a 'name' attribute, you can call it with that name in a nodeList
      // if the test is broken, check name attribute in JSX
      e.preventDefault()
      if (!nodes.title.value || !nodes.content.value) {
        console.error('All fields are required')
      }
      handleSubmit(props.addNote, {
        title: nodes.title.value,
        content: nodes.content.value
      })
      props.history.push('/')
    }}
  >
    <label htmlFor="title">Title</label>
    <input name="title" className="ATF--input" placeholder="Note Title" />

    <label htmlFor="content">Content</label>
    <input name="content" className="ATF--input" placeholder="Note Content" />

    <button type="submit" name="submit" />
  </form>
)

AddNoteForm.propTypes = {
  addNote: PropTypes.func,
  history: PropTypes.object
}

export const handleSubmit = (addHandler, nodes) => {
  addHandler({
    title: nodes.title,
    content: nodes.content
  })
}
