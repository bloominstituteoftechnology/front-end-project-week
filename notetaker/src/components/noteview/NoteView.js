import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button, Input, InputGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import './noteview.css'

export default class NoteView extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row className="border">
                <Col xs="3" className="sidebar">
                    <h1 className="mt-3 text-left heading">Lambda Notes</h1>
                    <Link to="/">
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">View Your Notes</button>
                    </Link>
                    <Link to="/create">
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">+ Create New Note</button>
                    </Link>
                </Col>
                <Col xs="9" className="pr-5">
                    <Row className="justify-content-end mt-3">
                        <Col xs="1">
                            <Link to="/edit" style={{ textDecoration: 'underline', color: 'black' }}>
                                edit
                            </Link>
                        </Col>
                        <Col xs="1">
                            <Link to="/delete" style={{ textDecoration: 'underline', color: 'black' }}>
                                delete
                            </Link>
                        </Col>
                    </Row>
                    <Row className="ml-3 mt-2 pt-4 mb-3">
                        <h3 className="text-left heading">Note Name</h3>
                    </Row>
                    <Row className="ml-3 mb-4 pr-4 text-left">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
                            dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                                qui officia deserunt mollit anim id est laborum.</p>
                    </Row>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
