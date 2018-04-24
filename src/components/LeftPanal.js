
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class LeftPanal extends Component {

    render(){
       return(
        
    
        <div className ='leftnav'>
        <h2 > Lambda Notes </h2>
    
    
        <Link to='/'><div className='button'> View Your Notes </div></Link>
       
    
    
        <Link to='/NewNote'><div className='button'> Create New Note </div></Link>
        </div>
        )
    }
}

export default LeftPanal;








