import React from 'react'
import md from 'markdown-it'
import checkbox from 'markdown-it-checkbox'

const renderer = md({ html: true, typographer: true })

const Markdown = (props) => {
  const markdown = renderer.render(props.markdown)
  return <div dangerouslySetInnerHTML={{ __html: markdown }} />
}

export default Markdown