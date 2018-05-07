import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import AddNote from './AddNote';
import ViewNotes from './ViewNotes';

class Sidebar extends Component {
    constructor(props) {
      super(props);
      this.state ={
        routes: [
          {
            path: '/view',
            exact: true,
            sidebar: () => <div>View Your Notes</div>,
            main: () => this.viewNotes()
          },
          {
            path: '/add',
            exact: false,
            sidebar: () => <AddNote />,
            main: () => <AddNote addNote={this.props.addNote} />
          }
        ]
      }
    }

    viewNotes = () => {
      return (
        <ViewNotes notes={this.props.notes} />
      )
    }

    render() {
      return (
        <div>
          {/* <Row> */}
            {/* <Col> */}
            <Navbar inverse>
              <Nav>
                <LinkContainer to="/view">
                  <NavItem>
                    View Your Notes
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/add">
                  <NavItem>
                    + Create New Note
                  </NavItem>
                </LinkContainer>
              </Nav>
            </Navbar>
            {/* </Col> */}
            {/* </Row> */}
        <Grid>
        <Row>
            <Col>
              {this.state.routes.map((route, index) => (
                <Route key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.main}
                />
              ))}
            </Col>
          </Row>
        </Grid>
        </div>
      )
    }
}

export default Sidebar;