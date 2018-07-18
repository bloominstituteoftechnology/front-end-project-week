import React from 'react'

export default ({ filterNotes }) =>
  <input
    type="text"
    onChange={filterNotes}
  />
