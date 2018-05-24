import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, CardColumns, CardBody } from 'reactstrap'; 

import './ListView.css';

class ListView extends Component {
  render() {
    return (
      <div>
          <h2 className="headerListView">Your Notes:</h2>
          <CardColumns className="cardColumns">
            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>              
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
                <Link to="/noteview">
                </Link>
              </CardBody>
            </Card>
            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>              
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
                <Link to="/noteview">
                </Link>
              </CardBody>
            </Card>
            <Card className="card">        
              <CardBody className="cardBody">
                <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>              
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
                <Link to="/noteview">
                </Link>
              </CardBody>
            </Card>      
            <Card className="card">        
              <CardBody>
                <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>              
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
                <Link to="/noteview">
                </Link>
              </CardBody>
            </Card>
            <Card className="card">        
              <CardBody>
                <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>              
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
                <Link to="/noteview">
                </Link>
              </CardBody>
            </Card>
            <Card className="card">        
              <CardBody>
                <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>              
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
                <Link to="/noteview">
                </Link>
              </CardBody>
            </Card>      
            <Card className="card">        
              <CardBody>
                <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>              
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
                <Link to="/noteview">
                </Link>
              </CardBody>
            </Card>
            <Card className="card">        
              <CardBody>
                <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>              
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
                <Link to="/noteview">
                </Link>
              </CardBody>
            </Card>
            <Card className="card">        
              <CardBody>
                <Link to="/singlenote"><CardTitle>Note Title</CardTitle></Link>              
                <CardText className="cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus feugiat vestibulum.</CardText>
                <Link to="/noteview">
                </Link>
              </CardBody>
            </Card>      
          </CardColumns>
        </div> 
    );
  }
};

export default ListView;