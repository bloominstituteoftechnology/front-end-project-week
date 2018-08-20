import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    render(){
    return ( 
        <div>
          <h1>Lambda Notes</h1>
         <Link to={`/`}>View Your Notes</Link>
         &emsp;
        <Link to='/new-note'>+ Create New Note</Link>
       </div>
     );
    }
}
 

export default Sidebar;