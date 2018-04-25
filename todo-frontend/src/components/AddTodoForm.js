import React from 'react'

export const AddTodoForm = props => (
  <form className="ATF" onSubmit={e => handleSubmit(e)}>
    <label htmlFor="title">Title</label>
    <input name="title" className="ATF--input" placeholder="Note Title" />

    <label htmlFor="content">Content</label>
    <input name="content" className="ATF--input" placeholder="Note Content" />

    <button type="submit" name="submit" />
  </form>
)

export const handleSubmit = e => {
  const nodes = document.getElementsByClassName('ATF--input')

  e.preventDefault()

  // if an HTMLInputNode has a 'name' attribute, you can call it with that name in a nodeList
  // if the test is broken, check name attribute in JSX
  if (!nodes.title)
    return {
      title: 'Title',
      content: 'Content'
    }

  return {
    title: nodes.title.value,
    content: nodes.content.value
  }
}
