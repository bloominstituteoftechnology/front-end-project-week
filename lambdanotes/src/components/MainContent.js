import React, { Component } from 'react';
import SideBar from './SideBar';
import ListView from './ListView';

class MainContent extends Component {
    render () {
        return (
            <div className= 'main-container'>
               <h1 className= 'nav-header'> Lambda Notes </h1>
               <ListView />
            </div>
        )
    }
}

export default MainContent;