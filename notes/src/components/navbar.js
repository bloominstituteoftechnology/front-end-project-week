import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { logout, loginStatus } from "../actions";

import { Col, Button } from "reactstrap";
import styled from "styled-components";
import "./navbar.css";

const H1 = styled.h1`
    font-family: Roboto;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 30px;
    line-height: 0.85;
    opacity: 0.8;
`;

const NavBar = props => {
    return (
        <Col xs="3" className="Background-Grey">
            <H1>Lambda Notes</H1>

            {props.isloggedIn === false ? (
                <React.Fragment>
                    <Link className="Link" to="/register">
                        <Button className="Button" size="lg" block>
                            Sign Up
                        </Button>
                    </Link>
                    <Link className="Link" to="/login">
                        {props.loginPage === true ? null : (
                            <Button onClick={props.loginStatus} className="Button" size="lg" block>
                                Login
                            </Button>
                        )}
                    </Link>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Link className="Link" to="/notes">
                        <Button className="Button" size="lg" block>
                            View Your Notes
                        </Button>
                    </Link>
                    <Link className="Link" to="/newnote">
                        <Button className="Button" size="lg" block>
                            + Create Your Notes
                        </Button>
                    </Link>

                    <Link className="Link" to="/">
                        <Button onClick={props.logout} className="Button" size="lg" block>
                            Logout
                        </Button>
                    </Link>
                </React.Fragment>
            )}
        </Col>
    );
};

const mapStateToProps = state => {
    return state;
};
export default withRouter(connect(mapStateToProps, { logout, loginStatus })(NavBar));
