import React from "react";

import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { Col, Row, Form, FormGroup, Input } from "reactstrap";

import styled from "styled-components";

import { addUser } from "../actions";

const H3 = styled.h3`
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 1.4rem;
    font-weight: bold;
    opacity: 0.8;
`;

const Btn = styled.button`
    width: 33%;
`;

class Register extends React.Component {
    state = {
        Redirect: false,
        Fields: {
            username: "",
            password: "",
            firstname: "",
            lastname: "",
        },
    };

    render() {
        return (
            <Col xs="9">
                {this.state.Redirect ? <Redirect to={"/"} /> : null}
                <Row>
                    <Col>
                        <Form className="mr-4 ml-3" onSubmit={this.handleSubmit}>
                            <H3>Create New User</H3>
                            <FormGroup>
                                <Input
                                    onChange={this.handleInputChange}
                                    value={this.state.Fields.username}
                                    name="username"
                                    type="text"
                                    className="form-control"
                                    placeholder="User Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    onChange={this.handleInputChange}
                                    value={this.state.Fields.password}
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    onChange={this.handleInputChange}
                                    value={this.state.Fields.firstname}
                                    name="firstname"
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    onChange={this.handleInputChange}
                                    value={this.state.Fields.lastname}
                                    name="lastname"
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                            </FormGroup>
                            <Btn className="Button btn btn-primary btn-block" type="submit">
                                Save
                            </Btn>
                        </Form>
                    </Col>
                </Row>
            </Col>
        );
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        const fields = this.state.Fields;
        fields[name] = value;
        this.setState({ Fields: fields });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.Fields.username && this.state.Fields.password && this.state.Fields.firstname && this.state.Fields.lastname) {
            this.props.addUser(this.state.Fields);
            this.setState({ Redirect: true });
        }
    };
}

const mapStateToProps = state => {
    return state;
};
export default withRouter(connect(mapStateToProps, { addUser })(Register));
