import React from 'react'

export const AddTodoForm = props => (
  <form className='ATF' onSubmit={e => handleSubmit(e)}>
    <label htmlFor='title' >Title</label>
    <input className='ATF--input' placeholder='Note Title' />

    <label htmlFor='content' >Content</label>
    <input className='ATF--input' placeholder='Note Content' />
  </form>
)

/**
 *
 * @param {React.SyntheticEvent} e
 */
export const handleSubmit = e => {
  const nodes = [...document.getElementsByClassName('.ATF--input')]
  console.log(nodes)
  e.preventDefault()
  return {
    title: nodes[0] || 'a taco',
    content: nodes[1] || 'a bell'
  }
}
