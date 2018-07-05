import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../../actions";

class Register extends React.Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        error: null,
        tooltip: false
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        const { password, email } = this.state;
        e.preventDefault();
        if (!email.includes('@' && '.') || email.length < 6) {
            this.setState({ error: 'Please provide a valid email address.'});
        } else if (password.length < 8) {
            this.setState({ error: `Password must be at least 8 characters long.`});
        } else {
            axios.post(`${process.env.REACT_APP_API_AUTH}/register`, this.state)
                .then(response => {
                    localStorage.setItem('jwt', response.data.token);
                    this.props.logIn();
                    this.props.history.push('/notes');
                })
                .catch(err => {
                    this.setState({ error: `Error processing your request. Please try again.`})
                });
        }
    }

    showTooltip = () => {
        this.setState({ tooltip: true });
    }

    hideTooltip = () => {
        this.setState({ tooltip: false });
    }

    passwordChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value.length >= 8) this.setState({ tooltip: false });
        else this.setState({ tooltip: true });
    }

    render() {
        const { email, password, firstName, lastName, error, tooltip } = this.state;
        return (
            <div className="register-form">
                <form>
                    <div className="message">
                        <p className="error">{error}</p>
                    </div>
                    <h3>Register</h3>
                    <input type="email" name="email" autoComplete="email" value={email} placeholder="email" onChange={this.onChange}/>
                    <div>
                        {tooltip ? (
                            <div className="message tooltip">
                                <p>8 characters minimum</p>
                            </div>
                        ) : (null)}
                        <input type="password" name="password" autoComplete="off" value={password} placeholder="password" onChange={this.passwordChange} onFocus={this.showTooltip} onBlur={this.hideTooltip}/>
                    </div>
                    <input type="text" name="firstName" autoComplete="given-name" value={firstName} placeholder="First Name" onChange={this.onChange}/>
                    <input type="text" name="lastName" autoComplete="family-name" value={lastName} placeholder="Last Name" onChange={this.onChange}/>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <a onClick={this.props.changeComponent}>Login</a>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return state;
}

export default withRouter(connect(mapStateToProps, { logIn })(Register));