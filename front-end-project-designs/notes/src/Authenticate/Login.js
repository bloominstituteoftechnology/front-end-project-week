import React from 'react';
import './login.css';
import axios from 'axios';
class Login extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    }

    handleInputChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    };

    handleRegister = (event) => {
        const userData = {
            username: this.state.username,
            password: this.state.password
        }        
        axios.post('http://localhost:7000/api/users/register', userData) 
             .then(res => {
                if (res.status === 201) {
                    alert("Registered Successfully 👍 " + userData.username + "\nCan proceed and login")
                }
             })
             .catch(err => console.log(err))
    }

    handleLoginSubmit = (event) => {
        const user = this.state.username;
        localStorage.setItem('user', user)
        window.location.reload();
    }

    render() {
        
        return (
            <div className = "Formdiv">
                <h1>Welcome to My Notes app</h1>
                <h4>Login / Register Page...</h4>

                <form>
                    <div className = "Fieldwrap">
                        <label>Username &nbsp; : </label>
                        <input 
                            type = "text"
                            name = "username"
                            value = {this.state.username}
                            onChange = {this.handleInputChange}
                        />
                    {/* </div> */}
     
                        <label>Password &nbsp; : </label>
                        <input style = {{marginBottom: "50px"}}
                            type = "password"
                            name = "password"
                            value = {this.state.password}
                            onChange = {this.handleInputChange}
                        />
                    </div>                  
                    <button onClick = {this.handleLoginSubmit} style = {{backgroundColor : "#07917a" ,marginLeft: "188px", width: "200px", fontSize: "20px", borderRadius:"8px"}} > 
                        Login 
                    </button>
                    <p style = {{borderBottom : "2.5px solid #07917a" ,
                                 marginLeft: "258px",
                                 width:'62px',
                                 paddingBottom: '8px',
                                 cursor: 'pointer' 
                                }} 
                        onClick = {this.handleRegister}
                    > 
                        Register
                    </p>
                               
                </form>
            </div>
        )
    }
}

export default Login;
