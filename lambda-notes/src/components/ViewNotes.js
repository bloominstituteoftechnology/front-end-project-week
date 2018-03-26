import React, { Component } from 'react';
import { Button, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/ViewNotes.css';

class ViewNotes extends Component {
  render() {
    return (
      <div className="ViewNotes">
        <div className="LeftSide">
          <h1 className="LambdaNotes">Lambda Notes</h1>
          <Link to ='/'><Button className="LeftSideButtons">View Your Notes</Button></Link>
          <Link to ='/CreateNote/'><Button className="LeftSideButtons">+ Create New Note</Button></Link>
        </div>

        <div className="RightSide">
          <h4 className="YourNotes">Your Notes:</h4>
          <div className="Cards">
            <Card className="Card">
              <CardBody>
                <CardTitle className="CardTitlex" className="CardTextx">Note Title</CardTitle>
                <hr className="CardDivider" />
                <CardText className="CardTextx">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  non ipsam laborum odit nesciunt impedit reprehenderit ...
                </CardText>
              </CardBody>
            </Card>
            <Card className="Card">
              <CardBody>
                <CardTitle className="CardTitlex" className="CardTextx">Note Title</CardTitle>
                <hr className="CardDivider" />
                <CardText className="CardTextx">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  non ipsam laborum odit nesciunt impedit reprehenderit ...
                </CardText>
              </CardBody>
            </Card>

            <Card className="Card">
              <CardBody>
                <CardTitle className="CardTitlex" className="CardTextx">Note Title</CardTitle>
                <hr className="CardDivider" />
                <CardText className="CardTextx">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  non ipsam laborum odit nesciunt impedit reprehenderit ...
                </CardText>
              </CardBody>
            </Card>

            <Card className="Card">
              <CardBody>
                <CardTitle className="CardTitlex" className="CardTextx">Note Title</CardTitle>
                <hr className="CardDivider" />
                <CardText className="CardTextx">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  non ipsam laborum odit nesciunt impedit reprehenderit ...
                </CardText>
              </CardBody>
            </Card>
            <Card className="Card">
              <CardBody>
                <CardTitle className="CardTitlex" className="CardTextx">Note Title</CardTitle>
                <hr className="CardDivider" />
                <CardText className="CardTextx">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  non ipsam laborum odit nesciunt impedit reprehenderit ...
                </CardText>
              </CardBody>
            </Card>

            <Card className="Card">
              <CardBody>
                <CardTitle className="CardTitlex" className="CardTextx">Note Title</CardTitle>
                <hr className="CardDivider" />
                <CardText className="CardTextx">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  non ipsam laborum odit nesciunt impedit reprehenderit ...
                </CardText>
              </CardBody>
            </Card>

            <Card className="Card">
              <CardBody>
                <CardTitle className="CardTitlex" className="CardTextx">Note Title</CardTitle>
                <hr className="CardDivider" />
                <CardText className="CardTextx">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  non ipsam laborum odit nesciunt impedit reprehenderit ...
                </CardText>
              </CardBody>
            </Card>
            <Card className="Card">
              <CardBody>
                <CardTitle className="CardTitlex" className="CardTextx">Note Title</CardTitle>
                <hr className="CardDivider" />
                <CardText className="CardTextx">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  non ipsam laborum odit nesciunt impedit reprehenderit ...
                </CardText>
              </CardBody>
            </Card>

            <Card className="Card">
              <CardBody>
                <CardTitle className="CardTitlex" className="CardTextx">Note Title</CardTitle>
                <hr className="CardDivider" />
                <CardText className="CardTextx">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  non ipsam laborum odit nesciunt impedit reprehenderit ...
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewNotes;
