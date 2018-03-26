import React, {Component} from 'react';
import {Panel,Grid,Row,Col,Button} from 'react-bootstrap';
import "./View.css";
import {Link} from 'react-router-dom';

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
                    <Panel className="notePanel">
                      <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida neque pulvinar elit semper  Suspendisse rutrum velit ...</Panel.Body>
                    </Panel>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Panel className="notePanel">
                      <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida neque pulvinar elit semper  Suspendisse rutrum velit ...</Panel.Body>
                    </Panel>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Panel className="notePanel">
                      <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida neque pulvinar elit semper  Suspendisse rutrum velit ...</Panel.Body>
                    </Panel>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={4} md={4} lg={4} className="col">
                    <Panel className="notePanel">
                      <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida neque pulvinar elit semper  Suspendisse rutrum velit ...</Panel.Body>
                    </Panel>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Panel className="notePanel">
                      <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida neque pulvinar elit semper  Suspendisse rutrum velit ...</Panel.Body>
                    </Panel>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Panel className="notePanel">
                      <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida neque pulvinar elit semper  Suspendisse rutrum velit ...</Panel.Body>
                    </Panel>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={4} md={4} lg={4} className="col">
                    <Panel className="notePanel">
                      <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida neque pulvinar elit semper  Suspendisse rutrum velit ...</Panel.Body>
                    </Panel>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Panel className="notePanel">
                      <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida neque pulvinar elit semper  Suspendisse rutrum velit ...</Panel.Body>
                    </Panel>
                  </Col>
                  <Col xs={4} md={4} lg={4} className="col">
                    <Panel className="notePanel">
                      <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida neque pulvinar elit semper  Suspendisse rutrum velit ...</Panel.Body>
                    </Panel>
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
