import React from 'react'; 
import '../components/sidebar.css'
import {Link} from "react-router-dom";

export default class Sidebar extends React.Component {
    render(){
      return(
          <div>
            <h1>Lambda Notes</h1>
              <p className="button"> 
                <Link to="/"> View Your Notes </Link>
              </p>
              <p className="button"> 
               <Link to='/CreateNew'> + Create A New Note </Link>
              </p>  
          </div> 
        )
    }
}