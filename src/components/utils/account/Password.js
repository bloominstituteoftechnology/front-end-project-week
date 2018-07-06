import React from "react";
import axios from "axios";

class Password extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: this.props.email,
            currentpassword: '',
            password: '',
            repeatpassword: '',
            success: null,
            error: null,
            tooltip1: false,
            tooltip2: false
        }
    }


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    showTooltip1 = () => {
        this.setState({ tooltip1: true });
    }

    hideTooltip1 = () => {
        this.setState({ tooltip1: false });
    }

    passwordChange1 = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value.length >= 8) this.setState({ tooltip1: false });
        else this.setState({ tooltip1: true });
    }

    showTooltip2 = () => {
        this.setState({ tooltip2: true });
    }

    hideTooltip2 = () => {
        this.setState({ tooltip2: false });
    }

    passwordChange2 = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value.length >= 8) this.setState({ tooltip2: false });
        else this.setState({ tooltip2: true });
    }

    handleUpdate = () => {
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        if (password.length < 8 || currentpassword.length < 8) {
            this.setState({
                success: null,
                error: 'Passwords must be 8 characters long.'
            });
        } else if (password !== repeatpassword) {
            this.setState({
                success: null,
                error: 'New passwords do not match.'
            });
        } else if (currentpassword === password) {
            this.setState({
                success: null,
                error: 'New password can not match current password.'
            });
        } else {
            axios.post(`${process.env.REACT_APP_API_AUTH}/login`, { email: this.state.email, password: currentpassword })
                .then(response => {
                    localStorage.removeItem('jwt');
                    localStorage.setItem('jwt', response.data.token);
                    axios.put(`${process.env.REACT_APP_API_USERS}/${this.props.id}`, this.state, requestOptions)
                        .then(() => {
                            this.setState({
                                error: null,
                                success: 'Successfully Updated',
                            });
                            this.timeoutSuccess();
                        })
                        .catch(err => {
                            if (err.message.includes('403')) {
                                this.setState({ error: `Please log in.`});
                                this.timeoutLogout();
                            } else if (err.message.includes('409')) {
                                this.setState({
                                    success: null,
                                    error: 'Email already exists. Please choose another.'
                                });
                            } else {
                                this.setState({
                                    success: null,
                                    error: 'Update failed.'
                                });
                            }
                        });
                })
                .catch(err => {
                    if (err.message.includes('401')) {
                        this.setState({
                            success: null,
                            error: 'Current password is incorrect.'
                        });
                    }
                });
            }
    }

    render() {
        const { currentpassword, password, repeatpassword } = this.state;
        return (
            <form className="account-form">
                <h3>Update Password</h3>

                    <div className="message">
                        {success ? (
                            <p className="success">{success}</p>
                        ) : (null)}

                        {error ? (
                            <p className="error">{error}</p>
                        ) : (null)}
                    </div>

                    <input type="password" name="currentpassword"  autoComplete="off" value={currentpassword} placeholder="Current Password" onChange={this.onChange}/>
                    <div>
                        {tooltip1 ? (
                            <div className="message tooltip">
                                <p>8 characters minimum</p>
                            </div>
                        ) : (null)}
                        <input type="password" name="password" autoComplete="off" value={password} placeholder="New Password" onChange={this.passwordChange1} onFocus={this.showTooltip1} onBlur={this.hideTooltip1}/>
                    </div>
                    <div>
                        {tooltip2 ? (
                            <div className="message tooltip">
                                <p>8 characters minimum</p>
                            </div>
                        ) : (null)}
                        <input type="password" name="repeatpassword" autoComplete="off" value={repeatpassword} placeholder="Repeat New Password" onChange={this.passwordChange2} onFocus={this.showTooltip2} onBlur={this.hideTooltip2}/>
                    </div>
                    <a className="button" onClick={this.handleUpdate}>Save</a>
            </form>
        );
    }
}

export default Password;

