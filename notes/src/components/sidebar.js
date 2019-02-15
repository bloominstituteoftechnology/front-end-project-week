import React from 'react';
import { Button }  from 'reactstrap'
import {Route, NavLink} from 'react-router-dom'
import CreateNote from './CreateNote'

function Sidebar(props) {

  return (
    <div className='noteContainer'>
      <NavLink to="/"><Button color="info" size='lg'>View Your Notes</Button></NavLink>
      <NavLink to="/create"><Button color="info" size='lg'>+Create Note</Button></NavLink>
      <NavLink to="/login"><Button color="info" size='lg'>Login</Button></NavLink>

   </div>
  )
}

export default Sidebar