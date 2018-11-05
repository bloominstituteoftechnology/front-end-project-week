import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => {
  {/* <Router> */}
    {/* <div> */}
      {/* <Route path='/listview' component={NoteListViewers} /> */}
    {/* </div> */}
  {/* </Router> */}
  return (
    <div className='nav-bar'>
      <h1>Lambda</h1>
      <h1>Notes</h1>
      <nav>
        <div className='href-button'>
        <Link to='view/ListView'>View Your Notes</Link>
          {/* <Link to='/listview'>View Your Notes</Link> */}
        </div>
        <div className='href-button'>
        {/* <Link to='/editview'>View Your Notes</Link> */}
        <Link to='/component/CreateNewView'>+ Create New Note</Link>
        </div>
      </nav> 
    </div> // nav-bar
  )
}

export default NavBar;