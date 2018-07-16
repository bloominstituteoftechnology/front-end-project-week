import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class SingleNoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(' any props in single view note?: ', this .props)
        return ( 
            <div>
                <div className='editDeleteLinks'>
                    {/* <a><Link to='/edit'>edit</Link></a> */}
                    <a className='editDeletelink'>edit</a>
                    <a className='editDeletelink' onClick={this.popModal}>delete</a>
                </div>
                <h3 className='headings mainAreaHeading'>Note Name</h3>
            </div>
         );
    }
}
 
export default SingleNoteView;