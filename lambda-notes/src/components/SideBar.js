import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

render(){
    return(
        <div>
            <h1>Lambda</h1>
            <h1>Notes</h1>
            <Link to='/'>View Notes</Link>
            <Link to='/new-note'>+ Create a Note</Link>
        </div>
    )
}
}

export default SideBar;