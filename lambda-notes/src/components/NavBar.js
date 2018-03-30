import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../App.css'
import './NavBar.css'

class NavBar extends Component {
    render () {
    const {onClick} = this.props

    return (
        <div className="NavBar">

            <a href="/" className="App_Title" >Lambda<br/>Notes</a>

            <Link to="/viewnotes" activeClassName="viewActive" style={{ textDecoration: 'none' }}><Button className="ViewBtn" onClick={onClick}><h1>View Your Notes</h1></Button></Link>
            <Link to="/CreateNote" style={{ textDecoration: 'none' }}> <Button className="CreateBtn" onClick={onClick}><h2>+ Create New Note</h2></Button></Link>
            
        </div>
    )
    }  
}

export default NavBar;