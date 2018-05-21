import React, { Component } from 'react';
import './note.css';

import { Route, Link } from 'react-router-dom';
import { Card, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

  class Notes extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            comment: ''
        }
    }
    
    render(){
        return(
        <div className="note">
            <Card>
                <CardBody>
                    <CardTitle>Note title</CardTitle>
                    <hr />
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
        )
    }

}
 
export default Notes;