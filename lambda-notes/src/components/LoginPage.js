import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    height: 100vh;
    width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginBox = styled.div`
    width: 53rem;
    padding: 5rem;
    border: 1px solid #AFAFAF;
    background-color: #FBFAFB;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-weight: bold;
        margin-bottom: 3rem;
        text-align: center;
    }
`
const LoginForm = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const LoginInput = styled.input`
    height: 4rem;
    width: 35.5rem;
    padding: 1rem;
    margin-bottom: 2rem;
`

const LoginButton = styled.button`
    width: 19rem;
    height: 4.5rem;
    border: 1px solid #AFAFAF;
    background-color: #24B8BD;
    color: #EAF4F3;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;    
`

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    setUser = () => {
        if (this.state.username !== '' && this.state.password !== ''){
            localStorage.setItem('lambdanotes-username', JSON.stringify(this.state.username));
            window.location.reload();
        }
    }

    handlesChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        return(
           <LoginContainer>
                <LoginBox>
                    <p>Login to Lambda Notes</p>
                    <LoginForm onSubmit={this.setUser}>
                        <LoginInput 
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.handlesChanges}
                            required
                        />
                        <LoginInput 
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handlesChanges}
                            required
                        />
                        <LoginButton>Log In</LoginButton>
                    </LoginForm>
                </LoginBox>
           </LoginContainer>
        );
    }
}

export default LoginPage;