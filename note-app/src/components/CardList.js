import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import './cardList.css';


const cardList = () => {
        return (
            <div className='listContainer'>
                        <h4 className='listHeader'>Your Notes:</h4>
                <div className='allCards'>
                <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                    </Link>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                    </Link>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                    </Link>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                    </Link>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                    </Link>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                    </Link>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                    </Link>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                </Link>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                    </Link>
           </div>
           </div>

        )
    }
    

export default cardList;