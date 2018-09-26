import React from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
  return(
    <div>
   <h2>Welcome To Lambda Notes</h2>
   <Link to ="/"><button>Enter</button></Link>
  </div>
  ) 
}
 
export default Header;