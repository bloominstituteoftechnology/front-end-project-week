import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <aside>
      <h1>Lambda Notes</h1>
      <Link className='links' name='ListView' to='/'>View Your Notes</Link>
      <Link className='links' name='CreateNote' to='/note/create'>+ Create New Note</Link>
    </aside>
  )
}

export default Navigation
