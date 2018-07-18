import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { SideBarStyle, Button, HeadingStyle } from "../../ReusableStyles";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <SideBarStyle>
          <Col md="12">
            <HeadingStyle>
              Lambda <br /> Notes
            </HeadingStyle>
          </Col>
          <Col md="12">
            <Button className="Button">View Your Notes</Button>
          </Col>
          <Col md="12">
            <Button>+ Create New Note</Button>
          </Col>
        </SideBarStyle>
      </Row>
    );
  }
}

export default SideBar;
