import React from 'react';
import { NavLink} from 'react-router-dom';

const Sidebar = () => {
  return ( 
    <div>
      <h1>Lambda Notes</h1>
      <NavLink to='/'>
        <button>View Your Notes</button>
      </NavLink>
      <NavLink to='/create'>
        <button>+ Create New Note</button>
      </NavLink>
    </div>
   );
}
 
export default Sidebar;