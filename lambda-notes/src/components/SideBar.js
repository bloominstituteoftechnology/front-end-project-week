import React from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, CardColumns } from 'reactstrap';


const SideBar = () => {
    return (
        <div className="side-bar">
            <h2>Lambda <br/>Notes</h2>
            <Button color="info" className="side-bar-button">View Your Notes</Button>
            <br/>
            <br/>
            <Link to="/createNote"><Button color="info" className="side-bar-button">+Create New Note</Button></Link>
        </div>
    )
}

export default SideBar;