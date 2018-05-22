import React from 'react';

import './ListView.css';

import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardBody } from 'reactstrap'; 


const ListView = (props) => {
  return (
    <CardColumns className="card-columns">
      <Card className="card">        
        <CardBody className="card-body">
          <CardTitle>Note Title</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="card">        
        <CardBody className="card-body">
          <CardTitle>Note Title</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="card">        
        <CardBody className="card-body">
          <CardTitle>Note Title</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>      
      <Card className="card">        
        <CardBody>
          <CardTitle>Note Title</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="card">        
        <CardBody>
          <CardTitle>Note Title</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="card">        
        <CardBody>
          <CardTitle>Note Title</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>      
      <Card className="card">        
        <CardBody>
          <CardTitle>Note Title</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="card">        
        <CardBody>
          <CardTitle>Note Title</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className="card">        
        <CardBody>
          <CardTitle>Note Title</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>      
    </CardColumns>
  );
};

export default ListView;