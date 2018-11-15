import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
      <h1>Lambda Notes</h1>
      <div>
        <Link to={'/'}>View your Notes</Link>
      </div>
      <div>
        <Link to={'/create-note'}>+ Create New Note</Link>
      </div>
    </div>
  )
}
