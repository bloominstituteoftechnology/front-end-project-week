import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import * as ROUTES from '../../constants/routes'

// TODO: Create logo and app name
// TODO: Add sign up and login functionality
export default class TopBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand>
                        <Link to={ROUTES.HOME}>Lambda Notes!</Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <LinkContainer to={ROUTES.HOME}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={ROUTES.NEW_NOTE}>
                            <Nav.Link>Create</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={ROUTES.ABOUT}>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={ROUTES.SIGN_IN}>
                            <Nav.Link>Sign In</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={ROUTES.SIGN_UP}>
                            <Nav.Link>Sign Up</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
