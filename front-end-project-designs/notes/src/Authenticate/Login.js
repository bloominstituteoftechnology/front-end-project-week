import React from 'react';
import './login.css';



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

    handleLoginSubmit = (event) => {
        const user = this.state.username;
        localStorage.setItem('user', user)
        window.location.reload();
    }

    render() {
        
        return (
            <div className = "Formdiv">
                <h1>Welcome to Lambda Notes</h1>
                <h3> Login Page...</h3>

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
                               
                </form>
            </div>
        )
    }
}

export default Login;
