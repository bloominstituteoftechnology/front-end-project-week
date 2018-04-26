import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {

    render(){
       return(
        <div className ='sidebar'>
          <h2 > Lambda Notes </h2>
          <Link to='/'><div className='button'> View Your Notes </div></Link>
          <Link to='/NewNote'><div className='button'> Create New Note </div></Link>
        </div>
        )
    }
}

export default Sidebar;