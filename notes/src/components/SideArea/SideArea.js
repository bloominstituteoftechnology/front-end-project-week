import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class SideArea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='sideArea'>
                <div className='sideHeader'>
                    <h1 className='headings'>Lambda</h1> 
                    <h1 className='headings'>Notes</h1>
                </div>
                <div className='sideButtons'>
                    <button className='sideButton'><Link to='/'>View Your Notes</Link></button>
                    <button className='sideButton'><Link to='/create'>+ Create New Note</Link></button>
                </div>

            </div> );
    }
}
 
export default SideArea;