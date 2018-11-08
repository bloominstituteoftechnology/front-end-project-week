import React, { Component } from 'react';
import SideBar from './SideBar';
import ListView from './ListView';

class MainContent extends Component {
    render () {
        return (
            <div className= 'main-container'>
               <ListView />
            </div>
        )
    }
}

export default MainContent;