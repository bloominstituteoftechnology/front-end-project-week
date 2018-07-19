import React from 'react'

export default ({ filterNotes }) =>
  <div>
    <label style={{fontWeight: '500'}}>
      Search: &nbsp;
      <input
        type="text"
        onChange={filterNotes}
      />
    </label>
  </div>
