import React from "react";
import { Button } from "reactstrap";

export default class VerticalNavButton extends React.Component {
  render() {
    return (
      <div>
        <Button>{this.props.text}</Button>
      </div>
    );
  }
}
