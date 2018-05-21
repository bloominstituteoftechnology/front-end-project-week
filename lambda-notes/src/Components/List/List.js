import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './List.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className = "list-wrapper">
                <Sidebar />
                <h1 className = "card-container-header">Your notes:</h1>
                
            </div>
          )
    }
}
 
export default List;
