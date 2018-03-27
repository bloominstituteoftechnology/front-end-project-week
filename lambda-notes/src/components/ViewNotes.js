import React, { Component } from 'react';
import { Button, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/ViewNotes.css';

class ViewNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
}

 
  render() {
    return (
      <div className="ViewNotes">
        <div className="LeftSide">
          <h1 className="LambdaNotes">Lambda Notes</h1>
          <Link to="/">
            <Button className="LeftSideButtons">View Your Notes</Button>
          </Link>
          <Link to ='/CreateNote'>
          <Button className="LeftSideButtons">+ Create New Note</Button></Link>
        </div>
        <div className="RightSide">
          <h4 className="YourNotes">Your Notes:</h4>
          {this.state.items.map(item => {
            return (
              <div className="Cards" key={item.key}>
                <Card className="Card">
                  <CardBody>
                    <CardTitle className="CardTitlex CardTextx">
                      {item.title}
                    </CardTitle>
                    <hr className="CardDivider" />
                    <CardText className="CardTextx">{item.content}</CardText>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ViewNotes;
