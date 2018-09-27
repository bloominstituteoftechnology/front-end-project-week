import React from 'react';
import {Link} from 'react-router-dom'
import "./Header.css";


const Header = () => {
  return(
    <div>
   <h2>Welcome To Lambda Notes</h2>
   <Link to ="/signup"><button>Signup</button></Link>
   <Link to ="/login"><button>Login</button></Link>
  </div>
  ) 
}
 
export default Header;