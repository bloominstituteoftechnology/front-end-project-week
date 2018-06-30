import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loggedIn } from "../../actions";

class Login extends React.Component {
    state = {
        email: 'test@test.com',
        password: '12345678'
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_AUTH}/login`, this.state)
            .then(response => {
                localStorage.setItem('jwt', response.data.token);
                this.props.loggedIn();
                this.props.history.push('/notes');
           })
            .catch(err => console.log(err));
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="login-form">
                <form>
                    <h3>Login</h3>
                    <input type="text" name="email" value={email} placeholder="email" onChange={this.handleChange}/>
                    <input type="password" name="password" value={password} placeholder="password" onChange={this.handleChange}/>
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

export default withRouter(connect(mapStateToProps, { loggedIn })(Login));