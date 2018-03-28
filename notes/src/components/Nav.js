import React from 'react';
import { NavLink } from 'react-router-dom';

// export default function Nav () {
//   return (
//     <nav className='nav'>
//     <h1>Lambda Notes</h1>
//       <ul>
//         <li>
//           <NavLink to='/' exact activeClassName='active'>
//           View Your Notes
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to='/add' activeClassName='active'>
//           + Create New Note
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   )
// };

export default function Nav () {
  return (
    <nav className='nav'>
    <h1>Lambda Notes</h1>
      <p>
        <NavLink to='/' exact activeClassName='active'>
        View Your Notes
        </NavLink>
      </p>
      <p>
        <NavLink to='/add' activeClassName='active'>
        + Create New Note
        </NavLink>
      </p>
    </nav>
  )
};