import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './List.css';
import Cards from './Cards';

const List = (props) =>{
        console.log(props);
        return (
            <div className = "list-wrapper">
                <Sidebar />
                <Cards notes = {props.notes} />                    
                </div>
          )
    }
    



 
export default List;
