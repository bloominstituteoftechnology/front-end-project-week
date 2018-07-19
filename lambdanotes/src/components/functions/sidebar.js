import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { SideBarStyle, Button, HeadingStyle } from "../../ReusableStyles";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <Button className="Button">View Your Notes</Button>
            </Link>
          </Col>
          <Col md="12">
            <Link to="/create">
              <Button>+ Create New Note</Button>
            </Link>
          </Col>
        </SideBarStyle>
      </Row>
    );
  }
}

export default SideBar;
