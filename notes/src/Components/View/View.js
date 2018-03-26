import React, {Component} from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';

class View extends Component{
  render(){
    return(
      <Grid>
        <Row className="show-grid">
          <Col xs={4} md={4} lg={4}>
            <div>
              <h1>Lambda</h1>
              <h1>Note</h1>
              <Button>View Your Notes</Button>
              <Button>+ Create New Note</Button>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default View;
