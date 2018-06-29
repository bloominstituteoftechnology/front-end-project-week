import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Register extends React.Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_AUTH}/register`, this.state)
            .then(response => {
                localStorage.setItem('jwt', response.data.token);
                this.props.history.push('/notes');
            })
            .catch(err => console.log(err.message));
    }

    render() {
        const { email, password, firstName, lastName } = this.state;
        return (
            <div>
                <form>
                    <input type="email" name="email" value={email} placeholder="email" onChange={this.onChange}/>
                    <input type="password" name="password" value={password} placeholder="password" onChange={this.onChange}/>
                    <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={this.onChange}/>
                    <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={this.onChange}/>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <a onClick={this.props.changeComponent}>Login</a>
            </div>
        );
    }
}

export default withRouter(Register);