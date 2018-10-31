import React from 'react';
import { Link } from 'react-router-dom';

 const SideMenu = () => {
 
  return (
    <div className="sideMenu">
     <h2> Lambda<br /> Notes</h2>
     <Link to="/">
       <button>View Your Notes</button>
     </Link>
     <Link to="/addNote">
      <button>+ Create New Notes</button>
     </Link>
     </div>
  
  );
}

export default SideMenu;