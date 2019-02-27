import React from 'react';



class Login extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        username: '',
        password: ''
        };
    }


    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user',user);
        window.location.reload();

    };
    
    render(){
        return (  
            <form className="login-container">
            <h3> Lambda Notes </h3>
                <input
                    name="username"
                    type="text" 
                    placeholder="User Name"
                    value={this.state.username}
                    onChange= {this.handleInputChange}
                 />
                <input 
                    name="password"
                    type="text"
                    placeholder="Password" 
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <br />
                <button color="success" onClick={this.handleLoginSubmit}>
                Log In 
                </button>
                </form>
        );
    }
}
 
export default Login;