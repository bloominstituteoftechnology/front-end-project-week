import React from "react";
import { Button } from "reactstrap";

export default class VerticalNavButton extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary" size="lg" outline block>
          {this.props.text}
        </Button>{" "}
      </div>
    );
  }
}
