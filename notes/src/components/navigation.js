import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Col, Button } from 'reactstrap';
import styled from 'styled-components';
import { logout } from '../actions/authActions';

import './navigation.css';

const H1 = styled.h1`
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 30px;
    line-height: .85;
    opacity: .8;
`

class Navigation extends React.Component {
    signout = () => {
        this.props.logout();
    } 
    render(){
        return (
            <Col xs="3" className="Background-Grey">
                <H1>Lambda Notes</H1>
                <Link className="Link" to="/">
                    <Button className="Button" size="lg" block>Home</Button>
                </Link>
                {this.props.isAuth ? (
                    <React.Fragment>
                        <Link className="Link" to="/">
                        <Button className="Button" size="lg" block>View Your Notes</Button>
                        </Link>
                        <Link className="Link" to="/newnote"> 
                            <Button className="Button" size="lg" block>+ Create Your Notes</Button>
                        </Link>
                        <Link className="Link" to="/"> 
                            <Button className="Button Danger" onClick={this.signout} size="lg" block>Logout</Button>
                        </Link>
                    </React.Fragment>
                ): (
                    <React.Fragment>
                        <Link className="Link" to="/login"> 
                            <Button className="Button Primary" size="lg" block>Login</Button>
                        </Link>
                        <Link className="Link" to="/signup"> 
                            <Button className="Button" size="lg" block>sign up</Button>
                        </Link>
                    </React.Fragment>
                )}
            </Col>
        );
    }
};

const mapStateToProps = ({isAuth })=> {
    return {
        isAuth,
    }
};

export default withRouter(connect(mapStateToProps, {logout})(Navigation));