import React from 'react'

export const Content = ({ notes }) => {
  return notes.map(({ id, title, text }) => {
    return (
      <div key={id}>
        <div>title</div>
        <div>text</div>
      </div>
    )
  })
}