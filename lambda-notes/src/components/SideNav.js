import React from 'react';
// import { Route, Link } from 'react-router-dom';

import sideNav from './sideNav.css';
import NewNote from './NewNote.js';
import ListView from './ListView.js';

const SideNav = (props) => {
    return (
      <div>
        <div class="sidenav">
            <h1 className="header-School">Lambda School</h1>        
            <button className="button1">View Your Notes</button>
                {/* <Route exact path="/" component={ListView}></Route>             */}
            <button className="button2">+ Create New Note</button>
                {/* <Route path= "/newnote" component={NewNote}></Route>                 */}
            

            {/* <Link to="/newnote" component="NewNote">Create New Note</Link> */}
                      

        </div>
        <div class="main">
            
        </div>     
      </div>

    );
};

export default SideNav;
