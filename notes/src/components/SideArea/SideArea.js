import React, { Component } from 'react';
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
                    <h1 className='headings'>Lambda Notes</h1>
                </div>
                <div className='sideButtons'>
                    <button className='sideButton'>View Your Notes</button>
                    <button className='sideButton'>+ Create New Note</button>
                </div>

            </div> );
    }
}
 
export default SideArea;