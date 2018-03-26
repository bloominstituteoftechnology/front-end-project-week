import React, {Component} from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import "./View.css";

class View extends Component{
  render(){
    return(
      <Grid className="grid">
        <Row className="show-grid">
          <Col xs={4} md={4} lg={4} className="col">
            <div className="side-bar">
              <h1>Lambda</h1>
              <h1 id="note">Note</h1>
              <Button className="btn">View Your Notes</Button>
              <br/>
              <Button className="btn">+ Create New Note</Button>
            </div>
          </Col>
          <Col xs={8} md={8} lg={8} className="col">
            <div className="main">
              <h3 id="mainHeader">Your Notes:</h3>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default View;
