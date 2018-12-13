import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const initialUser = {
    username: "",
    password: ""
};

export default class Register extends React.Component {
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
        axios.post(`https://infinite-cliffs-77240.herokuapp.com/api/register`, this.state.user)
            .then(res => {
                this.setState({
                    message: "Registration successful",
                    user: { ...initialUser }
                });
            })
            .catch(err => {
                this.setState({
                    message: "Registration failed",
                    user: { ...initialUser }
                });
            });
    }

    render() {
        return (
            <div className="signIn">
                <form onSubmit={this.submitHandler}>
                    <h2>Register</h2>
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
                    {this.state.message ?
                        (<p>{this.state.message}</p>) :
                        undefined }
                </form>
                <footer>
                    <Link to="/login">Already registered?</Link>
                </footer>
            </div>
        );
    }
}