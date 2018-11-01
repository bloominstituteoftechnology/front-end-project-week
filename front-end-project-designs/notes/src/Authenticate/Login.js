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
                        <label>Username : </label>
                        <input 
                            type = "text"
                            name = "username"
                            value = {this.state.username}
                            onChange = {this.handleInputChange}
                        />
                    </div>
     
                        <label>Password : </label>
                        <input className = "Fieldwrap"
                            type = "password"
                            name = "password"
                            value = {this.state.password}
                            onChange = {this.handleInputChange}
                        />
                                      
                    <button onClick = {this.handleLoginSubmit} > 
                        Login 
                    </button>
                               
                </form>
            </div>
        )
    }
}

export default Login;
