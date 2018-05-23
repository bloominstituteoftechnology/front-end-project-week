import React, { Component } from 'react';
import './LeftNav.css';

class LeftNav extends Component {
    render() {
        return (
            <div className='navWrap'>
                <h1 className='navHeader'>Lambda Notes</h1>
                <button className='navButton'><h3>View Your Notes</h3></button>
                <button className='navButton'><h3>+ Create New Note</h3></button>
            </div>
        );
    }
}

export default LeftNav;