import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';


const cardList = () => {
        return (
            <Container className='listContainer'>
                <Row>
                    <Col>
                        <h4 className='listHeader'>Your Notes:</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                </Link>
                    </Col>
                    <Col>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                </Link>
                    </Col>
                    <Col>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                </Link>
                    </Col>
                    <Col>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                </Link>
                    </Col>
                    <Col>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                </Link>
                    </Col>
                    <Col>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                </Link>
                    </Col>
                    <Col>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                </Link>
                    </Col>
                    <Col>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                </Link>
                    </Col>
                    <Col>
                    <Link to='/card' className='cardLink'>
                    <div className='noteCard'>
                        <h6 className='cardTitle'>Note Title</h6>
                        <p className='cardContent'>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this...</p>
                    </div>
                </Link>
                    </Col>
                </Row>
            </Container>

        )
    }
    

export default cardList;