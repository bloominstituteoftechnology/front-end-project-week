import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="signIn">
                <form>
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </form>
                <footer>
                    <Link to="/register">Not registered yet?</Link>
                </footer>
            </div>
        );
    }
}