import React from 'react'; 
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const SideBar = props => {
  return (
    <div className='side-bar'>
      <h1>Lambda Notes</h1>
      <Route path={'/'} render={props => {
        return (
          <React.Fragment>
            <NavLink to={'/'}>View your Notes</NavLink>
            <NavLink to={'/create'}>+ Create New Note</NavLink>
            {/* <button>+ Create New Note</button> */}
          </React.Fragment>
        )
      }} />
    </div>
  )
}

export default SideBar;