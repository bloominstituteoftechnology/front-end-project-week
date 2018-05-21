import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'reactstrap';

const Sidebar = () => {
    return (
        <div>
            <h1 className='title'>Lambda Notes</h1>
            <button block='true' className='button'>View Your Notes</button>
            <button block='true' className='button'>+ Create New Note</button>
        </div>
                
    )
}

export default Sidebar;