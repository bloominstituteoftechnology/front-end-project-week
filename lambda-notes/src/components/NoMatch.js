import React from 'react'

const NoMatch = (props) => {
  setTimeout(() => props.history.push('/'), 5000)
  return (
    <h1 className='no-match'>
      #Sorry... that url you're looking for doesn't seem to exist :(
      <br />
      ##ReDirecting you to an existing page
    </h1>
  )
}
export default NoMatch
