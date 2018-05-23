import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './List.css';
import { dummydata } from '../../dummydata/dummydata';
import Cards from './Cards';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes : {dummydata},
          };
    }

    
    render() { 
        return (
            <div className = "list-wrapper">
                <Sidebar />
                <Cards notes = {this.state.notes}/>                    
                </div>
          )
    }
    
}


 
export default List;
