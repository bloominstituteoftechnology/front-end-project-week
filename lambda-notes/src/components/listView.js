import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody } from 'reactstrap'; 

import listView from './listView.css';
import SideNav from './SideNav.js'; 


const ListView = (props) => {
  return (
    <div>
      <SideNav /> 
        <CardColumns className="cardColumns">
          <Card className="card">        
            <CardBody className="cardBody">
              <CardTitle>Card title</CardTitle>              
              <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla. </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card className="card">        
            <CardBody className="cardBody">
              <CardTitle>Card title</CardTitle>              
              <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card className="card">        
            <CardBody className="cardBody">
              <CardTitle>Card title</CardTitle>              
              <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>      
          <Card className="card">        
            <CardBody>
              <CardTitle>Card title</CardTitle>              
              <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card className="card">        
            <CardBody>
              <CardTitle>Card title</CardTitle>              
              <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card className="card">        
            <CardBody>
              <CardTitle>Card title</CardTitle>              
              <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>      
          <Card className="card">        
            <CardBody>
              <CardTitle>Card title</CardTitle>              
              <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card className="card">        
            <CardBody>
              <CardTitle>Card title</CardTitle>              
              <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card className="card">        
            <CardBody>
              <CardTitle>Card title</CardTitle>              
              <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>      
        </CardColumns>
      </div> 
  );
};

export default ListView;