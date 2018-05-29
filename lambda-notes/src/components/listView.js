import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, CardColumns, CardBody } from 'reactstrap'; 

import listView from './listView.css';
import SideNav from './SideNav.js'; 

class ListView extends Component {
  render() {
    return (
      <div>
        <SideNav />
          <h2 className="header">Your Notes:</h2>
          <CardColumns className="cardColumns">
            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/noteview">
                <CardTitle className="cardTitle">Note title</CardTitle>              
                </Link>
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla. </CardText>                      
              </CardBody>
            </Card>

            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/noteview">
                <CardTitle className="cardTitle">Note title</CardTitle>              
                </Link>
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla. </CardText>                      
              </CardBody>
            </Card>

            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/noteview">
                <CardTitle className="cardTitle">Note title</CardTitle>              
                </Link>
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla. </CardText>                      
              </CardBody>
            </Card>

            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/noteview">
                <CardTitle className="cardTitle">Note title</CardTitle>              
                </Link>
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla. </CardText>                      
              </CardBody>
            </Card>

            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/noteview">
                <CardTitle className="cardTitle">Note title</CardTitle>              
                </Link>
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla. </CardText>                      
              </CardBody>
            </Card>

            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/noteview">
                <CardTitle className="cardTitle">Note title</CardTitle>              
                </Link>
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla. </CardText>                      
              </CardBody>
            </Card>

            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/noteview">
                <CardTitle className="cardTitle">Note title</CardTitle>              
                </Link>
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla. </CardText>                      
              </CardBody>
            </Card>

            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/noteview">
                <CardTitle className="cardTitle">Note title</CardTitle>              
                </Link>
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla. </CardText>                      
              </CardBody>
            </Card>

            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/noteview">
                <CardTitle className="cardTitle">Note title</CardTitle>              
                </Link>
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum. Ut molestie, ex at efficitur aliquet, dui justo venenatis augue, in dignissim lectus justo ut nulla. </CardText>                      
              </CardBody>
            </Card>

          </CardColumns>
        </div> 
    );
  }
};

export default ListView;