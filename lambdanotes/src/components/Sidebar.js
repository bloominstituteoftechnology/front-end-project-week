import React, {Component } from 'react';
import '../styling/navbar.css';
import { Button } from 'reactstrap';

class Sidebar extends Component {
    render() {
        return (
        <div className= 'sidebar'>
            <h1 className= 'lambdanotes'>Lamba<br></br>Notes</h1>
            <Button classname= 'sidebarbut'>View Your Notes</Button>
            <Button classname= 'sidebarbut2'>+ Create New Note</Button>
        </div>
        )
    }
}

export default Sidebar;