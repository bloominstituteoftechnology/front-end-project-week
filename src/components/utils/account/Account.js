import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { resetStore, logOut } from "../../../actions";
import { Email, Names, Password } from "./";

class Account extends React.Component {
    state = {
        email: '',
        currentpassword: '',
        password: '',
        repeatpassword: '',
        firstName: '',
        lastName: '',
        success: '',
        modal: false,
        error: '',
        tooltip1: false,
        tooltip2: false,
        timeout: null
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        if (!token) {
            this.props.resetStore();
            this.props.logOut();
            this.props.history.push('/');
        } else {
            const requestOptions = { headers: { Authorization: token } };
            axios.get(`${process.env.REACT_APP_API_USERS}/${this.props.id}`, requestOptions)
                .then(response => {
                    this.setState({
                        error: null,
                        email: response.data.email,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                    });
                })
                .catch(() => {
                    this.setState({ error: `There was an error processing the request. Please try again.` });
                });
        }
    }
    
    componentWillUnmount() {
        window.clearTimeout(this.state.timeout);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleEmailUpdate = () => {
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        const { email } = this.state;

        axios.put(`${process.env.REACT_APP_API_USERS}/${this.props.id}`, { email }, requestOptions)
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
                        error: 'Update failed. Please try again.'
                    });
                }
            });
    }

    handleNamesUpdate = () => {
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        const { firstName, lastName } = this.state;

        axios.put(`${process.env.REACT_APP_API_USERS}/${this.props.id}`, { firstName, lastName }, requestOptions)
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
                } else {
                    this.setState({
                        success: null,
                        error: 'Update failed. Please try again.'
                    });
                }
            });
    }

    handlePasswordUpdate = () => {
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        const { password, currentpassword, repeatpassword, email } = this.state;

        if (password.length < 8 || currentpassword.length < 8 || repeatpassword.length < 8) {
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
            axios.post(`${process.env.REACT_APP_API_AUTH}/login`, { email , password: currentpassword })
                .then(response => {
                    localStorage.removeItem('jwt');
                    localStorage.setItem('jwt', response.data.token);
                    axios.put(`${process.env.REACT_APP_API_USERS}/${this.props.id}`, { password }, requestOptions)
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
                            } else {
                                this.setState({
                                    success: null,
                                    error: 'Update failed. Please try again.'
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
                    } else {
                        this.setState({
                            success: null,
                            error: 'Update failed. Please try again.'
                        })
                    }
                });
            }
    }

    handleDelete = () => {
        this.toggleModal();
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        axios.delete(`${process.env.REACT_APP_API_USERS}/${this.props.id}`, requestOptions)
            .then(() => {
                localStorage.removeItem('jwt');
                this.props.resetStore();
                this.props.history.push('/deleted');
            })
            .catch(() => {
                this.setState({ 
                    success: null,
                    error: 'Delete failed.' 
                });
            });
    }

    passwordChange1 = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value.length >= 8) this.setState({ tooltip1: false });
        else this.setState({ tooltip1: true });
    }

    passwordChange2 = e => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value.length >= 8) this.setState({ tooltip2: false });
        else this.setState({ tooltip2: true });
    }

    showTooltip1 = () => {
        this.setState({ tooltip1: true });
    }

    hideTooltip1 = () => {
        this.setState({ tooltip1: false });
    }
    showTooltip2 = () => {
        this.setState({ tooltip2: true });
    }

    hideTooltip2 = () => {
        this.setState({ tooltip2: false });
    }

    toggleModal() {
        this.setState({modal: !this.state.modal});
    }

    timeoutSuccess = () => {
        const success = setTimeout(() => {
            this.setState({ success: null });
        }, 3000);
        this.setState({ timeout: success });
    }

    timeoutLogout = () => {
        const logout = setTimeout(() => {
            this.props.resetStore();
            this.props.logOut();
            this.props.history.push('/');
        }, 4000);
        this.setState({ timeout: logout });
    }

    render() {
        const {
            email,
            currentpassword,
            password,
            repeatpassword,
            firstName,
            lastName,
            success,
            modal,
            error,
            tooltip1,
            tooltip2
        } = this.state;

        return (
            <div className="account-page">

                <div className="message">
                    {success ? (
                        <p className="success">{success}</p>
                    ) : (null)}

                    {error ? (
                        <p className="error">{error}</p>
                    ) : (null)}
                </div>

                <div className="account-form">
                    <h3>Account Details</h3>
                    <Email 
                        email={email} 
                        onChange={this.onChange}
                        handleEmailUpdate={this.handleEmailUpdate} 
                    />
                    <Names 
                        onChange={this.onChange}
                        handleNamesUpdate={this.handleNamesUpdate}
                        firstName={firstName}
                        lastName={lastName}
                    />
                    <Password 
                        onChange={this.onChange}
                        handlePasswordUpdate={this.handlePasswordUpdate}
                        passwordChange1={this.passwordChange1}
                        passwordChange2={this.passwordChange2}
                        showTooltip1={this.showTooltip1}
                        hideTooltip1={this.hideTooltip1}
                        showTooltip2={this.showTooltip2}
                        hideTooltip2={this.hideTooltip2}
                        tooltip1={tooltip1}
                        tooltip2={tooltip2}
                        currentpassword={currentpassword}
                        password={password}
                        repeatpassword={repeatpassword}
                    />

                    <div>
                        <a className="button delete" onClick={() => this.toggleModal()}>Delete Account</a>
                    </div>
                </div>


                {modal ? (
                        <div>
                            <div className="modal-background"></div>
                            <div className="modal-position">
                                <div className="modal">
                                    <p>Are you sure you want to delete your account?</p>
                                        <div className="modal-actions">
                                            <a className="button delete" onClick={() => this.handleDelete()}>Delete</a>
                                            <div className="modal-divider"></div>
                                            <a className="button" onClick={() => this.toggleModal()}>Cancel</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ) : (null)}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { resetStore, logOut })(Account);