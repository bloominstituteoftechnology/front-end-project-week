import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../../actions";

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: null
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_AUTH}/login`, this.state)
            .then(response => {
                this.setState({ error: null })
                localStorage.setItem('jwt', response.data.token);
                this.props.logIn();
                this.props.history.push('/notes');
           })
            .catch(err => {
                if (err.message.includes('4')) {
                    this.setState({ error: `Wrong username or password. Please try again.` });
                } else {
                    this.setState({ error: `Error processing request. Please try again.`})
                }
            });
    }

    render() {
        const { email, password, error } = this.state;
        return (
            <div className="login-form">
                <form>
                    <div className="message">
                        <p className="error">{error}</p>
                    </div>
                    <h3>Login</h3>
                    <input type="text" name="email"  autoComplete="email" value={email} placeholder="email" onChange={this.handleChange}/>
                    <input type="password" name="password"  autoComplete="password" value={password} placeholder="password" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>
                <a onClick={this.props.changeComponent}>Register</a>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default withRouter(connect(mapStateToProps, { logIn })(Login));