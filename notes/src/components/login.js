import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { login } from '../actions/authActions';
import styled from 'styled-components';
import { 
    Col,
    Row,
    Form,
    FormGroup, 
    Input,
} from 'reactstrap';

const LoginButton = styled.button`
    width: 100px;
    color: white;
`;

const H3 = styled.h3`
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 1.4rem;
    font-weight: bold;
    opacity: 0.8;
`;

class Login extends React.Component {
    state = {
        Fields: {
            username: '',
            password: '',
        }
    }
    render(){
        return (
            <Col xs="9">
            {(this.props.isAuth) ? (<Redirect to={'/'}/>) : ('') }  
                <Row>
                    <Col>
                        <Form>
                            <H3>Please login</H3>
                            <FormGroup>
                                <Input value={this.state.Fields.username} onChange={this.handleInputChange} type="text" name="username"  placeholder="username" />
                            </FormGroup>
                            <FormGroup>
                                <Input  value={this.state.Fields.password} onChange={this.handleInputChange} type="password" name="password"  placeholder="password" />
                            </FormGroup>
                            <LoginButton className="Button" onClick={this.handleSubmit}>Login</LoginButton>
                        </Form>
                    </Col>
                </Row>
            </Col>
        );
    }

    handleInputChange = (event) => {
        const { name , value } = event.target;
        const fields = this.state.Fields;
        fields[name] = value;
        this.setState({ Fields: fields });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.Fields.username && this.state.Fields.password) { 
            this.props.login(this.state.Fields);
        }
    }
};

const mapStateToProps = ({isAuth} ) => {
    return {
        isAuth,
    }
};


export default withRouter(connect(mapStateToProps,{ login })(Login));