import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './List.css';
import { dummydata } from '../../dummydata/dummydata';
import Cards from './Cards';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dummydata : [{dummydata}],
          };
    }

    
    render() { 
        return (
            <div className = "list-wrapper">
                <Sidebar />
                <Cards dummydata = {this.state.dummydata}/>                    
                </div>
          )
    }
    
}


 
export default List;
