import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button, Card, CardText, CardBody, CardTitle } from 'reactstrap';
import ViewNote from './ViewNote';
import '../App.css';

class ViewNotes extends Component {

  
  render() {
    return (
      <div className="ViewNotes">
        <div className="LeftSide">
          <h1 className="LambdaNotes">Lambda Notes</h1>
          <Link to="/">
            <Button className="LeftSideButtons">View Your Notes</Button>
          </Link>
          <Link to="/CreateNote">
            <Button className="LeftSideButtons">+ Create New Note</Button>
          </Link>
        </div>

        <div className="RightSide">
          <h4 className="YourNotes">Your Notes:</h4>
          <div className="CardsDiv">
            {this.props.notes.map((note, key) => {
              return (
                <div className="Cards" key={note.key}>
                  <Link to={`/ViewNote/${note.key}`} className="ViewNoteLink">
                    <Card className="Card">
                      <CardBody>
                        <CardTitle className="CardTitle CardText">
                          {note.title}
                        </CardTitle>
                        <hr className="CardDivider" />
                        <CardText className="CardText">{note.content}</CardText>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <hr />

         {/* <Route path='/ViewNote/:key' render={({match: { params: { key }}} ) => (
          <div>
          {console.log(key)}
          </div>
        )} />   */}

        
      </div>
    );
  }
}

export default ViewNotes;
