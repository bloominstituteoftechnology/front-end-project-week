import Markdown from 'markdown-to-jsx'
import React from 'react'

const NoMatch = (props) => {
  return (
    <div className='no-match'>
      <Markdown className='noMatch-header'>
        #Sorry... that url you're looking for doesn't seem to exist :(
      </Markdown>
    </div>
  )
}
export default NoMatch
