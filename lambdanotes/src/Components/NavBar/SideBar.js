import React, { Component } from 'react';
import './Bar.css';
import ViewButton from './Buttons/ViewButton';
class SideBar extends Component  {
    render() {
        return (
            <div className="sidebar">
                <h1>Lambda Notes</h1>
                <ViewButton />
            </div>
        );
    };
}

export default SideBar;