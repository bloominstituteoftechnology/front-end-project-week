import React, {Component } from 'react';
import '../styling/navbar.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class Sidebar extends Component {
    render() {
        return (
        <div className= 'sidebar'>
            <h1 className= 'lambdanotes'>Lamba<br></br>Notes</h1>
            <Link to= '/' style={{ textDecoration: 'none' }}>
                <Button className= 'sidebarbut'>View Your Notes</Button>
            </Link>
            <Link to= '/createnote' style={{ textDecoration: 'none' }}>
                <Button className= 'sidebarbut2'>+ Create New Note</Button>
            </Link>
        </div>
        )
    }
}

export default Sidebar;