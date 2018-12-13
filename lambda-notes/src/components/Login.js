import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = require("../api-url.js");

const initialUser = {
    username: "",
    password: ""
};

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { ...initialUser },
            message: ""
        }
    }

    inputHandler = ev => {
        const { name, value } = ev.target;
        this.setState({ user: { ...this.state.user, [name]: value } });
    }

    submitHandler = ev => {
        ev.preventDefault();
        axios
            // .post(`https://infinite-cliffs-77240.herokuapp.com/api/register`, this.state.user)
            .post(`${url}/api/login`, this.state.user)
            .then(res => {
                if (res.data) {
                    localStorage.setItem("$6341452asdf", res.data.token);
                    this.setState({
                        message: "Login successful",
                        user: { ...initialUser }
                    });
                } else {
                    throw new Error();
                }
            })
            .catch(err => {
                this.setState({
                    message: "Authentication failed",
                    user: { ...initialUser }
                });
            });
    }

    render() {
        return (
            <div className="signIn">
                <form onSubmit={this.submitHandler}>
                    <h2>Login</h2>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.user.username}
                        onChange={this.inputHandler}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.user.password}
                        onChange={this.inputHandler}
                    />
                    <button type="submit">Submit</button>
                    {this.state.message ?
                        (<p>{this.state.message}</p>) :
                        undefined }
                </form>
                <footer>
                    <Link to="/register">Not registered yet?</Link>
                </footer>
            </div>
        );
    }
}