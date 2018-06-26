import React from "react";
import axios from "axios";

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post('https://notesmtm.herokuapp.com/api/auth/login', this.state)
            .then(response => {
                localStorage.setItem('jwt', response.data.token);
                this.props.history.push('/');
           })
            .catch(err => console.log(err));
    }

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <form>
                    <h3>Sign In</h3>
                    <input type="text" name="username" value={username} placeholder="username" onChange={this.handleChange}/>
                    <input type="password" name="password" value={password} placeholder="password" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>
            </div>
        );
    }
}

export default Login;