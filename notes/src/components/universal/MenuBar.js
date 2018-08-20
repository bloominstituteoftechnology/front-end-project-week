import React from 'react';
import { Link } from 'react-router-dom';

export const MenuBar = (props) => {
  return (
    <div>
      <h1>Lambda<br/>
      Notes</h1>
      <Link to='/'><button>View Your Notes</button></Link>
      <Link to='/new-note'><button>+ Create New Note</button></Link>
    </div>
  )
}
