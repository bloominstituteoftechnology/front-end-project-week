import React, {Component} from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import "./View.css";
import {Link} from 'react-router-dom';
import Note from "../Note/Note.js";

class View extends Component{
  render(){
    return(
      <Grid className="grid">
        <Row className="show-grid">
          <Col xs={3} md={3} lg={3} className="col">
            <div className="side-bar">
              <h1>Lambda</h1>
              <h1 id="note">Note</h1>
              <Button className="btn">View Your Notes</Button>
              <br/>
              <Link to={`/create/`}>
                <Button className="btn">+ Create New Note</Button>
              </Link>
            </div>
          </Col>
          <Col xs={9} md={9} lg={9} className="col">
            <div className="main">
              <Grid className="grid">
                <Row className="show-grid">
                  <h3 id="mainHeader">Your Notes:</h3>
                </Row>
                <Row className="show-grid">
                  <Col xs={4} md={4} lg={4} className="col">
                    <Note/>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Note/>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Note/>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={4} md={4} lg={4} className="col">
                    <Note/>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Note/>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Note/>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={4} md={4} lg={4} className="col">
                    <Note/>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Note/>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Note/>
                  </Col>
                </Row>
              </Grid>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default View;
