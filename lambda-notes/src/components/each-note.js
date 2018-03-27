import React, { Component } from "react";
import { CardText, CardBody, CardTitle } from "reactstrap";

import TextEllipsis from 'react-text-ellipsis';


class EachNote extends Component {

	render() {
    const cardText = this.props.body;
    return (      
        <CardBody className="Note">
          <CardTitle className="Note__Title">{this.props.title}</CardTitle>
          <CardText className="Note__Body">
            <TextEllipsis lines={5} tag={"p"}
              ellipsisChars={" ..."} tagClass={"className"}
              debounceTimeoutOnResize={200} useJsOnly={true}
              onResult={result => {
                if (result === TextEllipsis.RESULT.TRUNCATED)
                  console.log("text get truncated");
                else console.log("text does not get truncated");
              }}>
              {cardText}
            </TextEllipsis>
          </CardText>
          <br />
        </CardBody>
    );
  }
}

export default EachNote;
