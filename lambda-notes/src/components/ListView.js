import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, CardColumns,
  CardBody } from 'reactstrap';

import './ListView.css';

const ListView = (props) => {
  return (
    <div>
    <div>
      <h2 className="main-text">Your Notes:</h2>
    </div>
    <CardColumns className="card-columns">
      <Card className="card">        
        <CardBody className="card-body">
          <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          </CardBody>
      </Card>
      <Card className="card">        
        <CardBody className="card-body">
          <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          </CardBody>
      </Card>
      <Card className="card">        
        <CardBody className="card-body">
          <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          </CardBody>
      </Card>      
      <Card className="card">        
        <CardBody>
          <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          </CardBody>
      </Card>
      <Card className="card">        
        <CardBody>
          <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          </CardBody>
      </Card>
      <Card className="card">        
        <CardBody>
          <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          </CardBody>
      </Card>      
      <Card className="card">        
        <CardBody>
          <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          </CardBody>
      </Card>
      <Card className="card">        
        <CardBody>
          <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          </CardBody>
      </Card>
      <Card className="card">        
        <CardBody>
          <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          </CardBody>
      </Card>      
    </CardColumns>
    </div>
  );
};

export default ListView;