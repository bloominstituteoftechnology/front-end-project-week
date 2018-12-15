import React from 'react';
import styled from 'styled-components';

// #region Styled Components
const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const SCHeader = styled.h1`
    font-weight: bold;
    font-size: 40px;
    margin-top: 100px;
`;
const SCForm = styled.form`
    display: flex;
    align-items: center;
    margin: 30px;
`;
const SCInput = styled.input`
    border: 2px solid lightgrey;
    margin: 10px;
    font-size: 14px;
    border-radius: 5px;
    padding: 10px;
`;
const SCButton = styled.button`
    background: #25B7BD;
    border: 1px solid #B7B7B7;
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 10px;
    margin: 10px;
    width: 100px;
    text-align: center;
`;
// #endregion Styled Components

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitLogin = event => {
        event.preventDefault();
        localStorage.setItem('user', this.state.username);
        window.location.reload();
    }

    render() {
        return (
            <LoginWrapper>
                <SCHeader>Welcome to Lambda Notes</SCHeader>
                    <SCForm>
                        <SCInput type="text" placeholder="Enter you username" name="username" value={this.state.username} onChange={this.handleInput} />
                        <SCInput type="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleInput} />
                        <SCButton onClick={this.handleSubmitLogin}>Log in</SCButton>
                    </SCForm>
            </LoginWrapper>
        )
    }

}

export default Login;