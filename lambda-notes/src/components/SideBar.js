import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

render(){
    return(
        <div class="side-bar">
            <h1>Lambda</h1>
            <h1>Notes</h1>
            <Link to='/' className="button">View Notes</Link>
            <Link to='/new-note' className="button">+ Create a Note</Link>
        </div>
    )
}
}

export default SideBar;