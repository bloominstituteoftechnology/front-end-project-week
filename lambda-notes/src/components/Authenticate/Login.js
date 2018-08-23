import React, {Component} from 'react';
import styled from 'styled-components';

const FormWrap = styled.div`
    
    background-image: url('../Media/wallpaper.jpg');
    background-repeat:no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    > form { 
        
        background: rgba(255, 255, 255, 0.6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 500px;
        height: 300px;
        width: 100%;
        margin: 0 auto;
        border-radius: 5px;
        border: 1px solid black;
        

        > input {
            
            margin-bottom: 10px;
            height: 30px;
            max-width: 300px;
            width: 100%;
            padding: 5px;
            font-size: 1.6rem;
            border-radius: 5px;
        }
        > button {
            max-width: 100px;
            width: 100%;
            height: 30px;
            font-size: 1.6rem;
            border-radius: 5px;
        }
    }
}
`
const Welcome = styled.div`

        
        max-width: 300px;
        width: 100%;
        margin-bottom: 30px;
        text-align: center;

    > h1 {
        font-size: 3.2rem;
    }
`


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
         }
    }

    change = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    submit = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() { 
        return ( 
        
        <FormWrap>
            <form>
            <Welcome>
                <h1>Welcome to Lambda Notes</h1>
            </Welcome>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.change}
                />
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.change}
                />
                <button
                    type="submit"
                    onClick={this.submit}
                >Login</button>
            </form>
            </FormWrap>
        );
    }
}
 
export default Login;