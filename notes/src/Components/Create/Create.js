import React, {Component} from 'react';
import {Panel,Grid,Row,Col,Button} from 'react-bootstrap';
import "./Create.css";
import {Link} from 'react-router-dom';

class Create extends Component{
  render(){
    return(
      <Grid className="grid">
        <Row className="show-grid">
          <Col xs={3} md={3} lg={3} className="col">
            <div className="side-bar">
              <h1>Lambda</h1>
              <h1 id="note">Note</h1>
              <Link to={`/`}>
                <Button className="btn">View Your Notes</Button>
              </Link>
              <br/>
              <Button className="btn">+ Create New Note</Button>
            </div>
          </Col>
          <Col xs={9} md={9} lg={9} className="col">
            <div className="main">
              <Grid className="grid">
                <Row className="show-grid">
                  <h3 id="mainHeader">Your Notes:</h3>
                </Row>
                <form>
                <Row className="show-grid">
                  <input type="text" value="Note Title"/>
                </Row>
                <Row className="show-grid">
                  <textarea value="Note Content" cols="70" rows="20"/>
                </Row>
                </form>
                <Row className="show-grid">
                  <Link to={`/`}>
                    <Button id="save">Save</Button>
                  </Link>
                </Row>
              </Grid>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Create;
