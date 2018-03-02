import React from 'react';
import { Route, Link } from 'react-router-dom';


function Sidebar () {
    return (
        <div className="sidebar">
              <h1 className="App-title">Lambda Notes</h1>
              <div className="button-col">
                <Link exact className='button' to={`/`}>View your notes</Link>
                <Link className='button' to={`/Createnote`}>+ Create your notes</Link>
              </div>   
        </div>
        
        )

}
export default Sidebar;         