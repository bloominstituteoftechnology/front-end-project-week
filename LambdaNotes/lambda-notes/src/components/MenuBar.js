import React from "react";
import '../Styles.css';
import { Link } from 'react-router-dom';


const MenuBar = () => {
  return (
    <div className='APP__MENUBAR'>
      <h1>Lambda<br/>Notes</h1>
        <Link to="/"><button className="APP__MENUBUTTON">
          View Your Notes
        </button></Link>
        <Link to="/create"><button className="APP__MENUBUTTON">
          + Create New Note
        </button></Link>
    </div>
  );
};

export default MenuBar;