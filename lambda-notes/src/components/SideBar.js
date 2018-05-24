import React from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, CardColumns } from 'reactstrap';


const SideBar = () => {
    return (
        <div className="side-bar">
            <h2 className="mt-3 ml-3 mb-4"><strong>Lambda<br/>Notes</strong></h2>
            <Link to="/"><button type="button" className="ml-3 btn btn-sm">View Your Notes</button></Link>
            <br/>
       
            <Link to="/createNote"><button type="button" className="ml-3 btn btn-sm">+Create New Note</button></Link>
        </div>
    )
}

export default SideBar;