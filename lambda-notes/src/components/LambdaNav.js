import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';

const LambdaNav = (props) =>{



return (

<div className="container">
<nav>

  <div className='cover'>
<h1>Lambda Notes</h1>
  </div>


  <NavLink to='/'>
  <button>View Your NOTES</button>
  </NavLink>
  <NavLink to='/CreateNote'>
    <button>+ Create New Note</button>
  </NavLink>

</nav>

</div>
);



}
export default LambdaNav
