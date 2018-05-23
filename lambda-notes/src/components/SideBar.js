import React from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, CardColumns } from 'reactstrap';


const SideBar = () => {
    return (
        <div className="side-bar">
            <h2>Lambda <br/>Notes</h2>
            <Link to="/"><button type="button" className="btn btn-info">View Your Notes</button></Link>
            <br/>
            <br/>
            <Link to="/createNote"><Button color="info" className="side-bar-button align-center">+Create New Note</Button></Link>
        </div>
    )
}

export default SideBar;