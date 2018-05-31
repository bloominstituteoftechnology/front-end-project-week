import React from 'react'
import md from 'markdown-it'
import checkbox from 'markdown-it-checkbox'

const renderer = md({ html: true, typographer: true }).use(checkbox)

const Markdown = (props) => {
  const markdown = renderer.render(props.markdown)
  return <div className="markdown" noteId={props.noteId} dangerouslySetInnerHTML={{ __html: markdown }} />
}

export default Markdown