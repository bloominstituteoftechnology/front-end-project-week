import React, { Component } from "react";
import NoteForm from "./NoteForm";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  Col,
  Row
} from "reactstrap";
class Home extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      Modal: false
    };
  }

  toggle() {
    console.log("toggled");
    this.setState({ Modal: !this.state.Modal });
  }
  render() {
    return (
      <React.Fragment>
        <div className="home-styles">
          <Row>
            <Row>
              <Navbar fixed={"top"} light expand="md">
                <Col sm="auto" md="auto">
                  <NavbarBrand href="/">
                    <i className="far fa-sticky-note" />
                    <div className="site-name">JLL Notes</div>
                  </NavbarBrand>
                </Col>

                <Nav navbar>
                  <Col sm="auto" md="6">
                    <NavItem>
                      <NavLink href="/">Home</NavLink>
                    </NavItem>
                  </Col>
                  <Col sm="auto" md="6">
                    <NavItem>
                      <NavLink onClick={this.toggle}>Create</NavLink>
                      <Modal isOpen={this.state.Modal}>
                        <NoteForm
                          notes={this.props.notes}
                          toggle={this.toggle}
                          updateGet={this.props.updateGet}
                        />
                      </Modal>
                    </NavItem>
                  </Col>
                </Nav>
              </Navbar>
            </Row>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
