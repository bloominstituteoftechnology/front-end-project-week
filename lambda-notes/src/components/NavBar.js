import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../App.css'

class NavBar extends Component {
    render () {
    const {onClick} = this.props

    return (
        <div className="NavBar">

            <a href="/" className="App_Title" >Lambda<br/>Notes</a>

            <Link to="/viewnotes"><Button onClick={onClick}>View Your Notes</Button></Link>
            <Link to="/CreateNote"> <Button>+ Create New Note</Button></Link>
            
        </div>
    )
    }  
}

export default NavBar;