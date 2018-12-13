import React from 'react'; 
import SearchFrom from './SearchForm'
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const SideBar = ({ content, search }) => {
  return (
    <div className='side-bar'>
      <h1>Lambda Notes</h1>
      <Route path={'/'} render={props => {
        return (
          <React.Fragment>
            <NavLink to={'/'}>View your Notes</NavLink>
            <NavLink to={'/create'}>+ Create New Note</NavLink>

          </React.Fragment>
        )
      }} />

      <Route exact path={'/'} render={props => {
        return (
          <React.Fragment>

            <SearchFrom content={content} search={search}/>
          </React.Fragment>
        )
      }} />

    </div>
  )
}

export default SideBar;