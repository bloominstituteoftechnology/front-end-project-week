import React, {Component} from 'react'
import '../App.css'
import axios from 'axios'
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';
class DeleteModal extends Component {
    constructor() {
        super();
        this.state = {
            home: false,
        }
    }



    render() {
        return(
            <div className='deleteContainer'>
            <p> Are you sure you want to delete this? </p>
            <div className='deleteButtons'>
            <NavLink activeClassName='selected' to='/home' >
            <button className='red' onClick={()=> {this.props.deleteNote(this.props.id)}} >Delete</button>
            </NavLink>
            <button onClick={this.props.noHandler}>No</button>
            </div>
            </div>
        )
    }
}

export default DeleteModal