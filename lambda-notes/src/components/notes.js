import React, { Component } from 'react';
import { Card, CardBlock, CardText,
  CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

  class notes extends Component {
    constructor(props) {
      super(props);
    }
     render () {
      let { id, title, body } = this.props.notes;
      return (
        <div className="card mt-4">
          <Card>
            <CardBlock>
              <CardTitle>{title}</CardTitle>
              <CardText>{body}</CardText>
            </CardBlock>
          </Card>
        </div>
      )
    }
  }

export default notes;