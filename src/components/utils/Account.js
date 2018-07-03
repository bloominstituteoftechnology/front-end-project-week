import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { resetStore } from "../../actions";

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
        tooltip2: false
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        axios.get(`${process.env.REACT_APP_API_USERS}/${this.props.id}`, requestOptions)
            .then(response => {
                this.setState({
                    email: response.data.email,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                })
            })
    }

    toggleModal() {
        this.setState({modal: !this.state.modal});
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleUpdate = e => {
        e.preventDefault();
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        const { email, firstName, lastName, password, repeatpassword, currentpassword } = this.state;
        if (password.length > 0) {
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
            } else if (currentpassword === password ) {
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
                                .then(response => {
                                    this.setState({
                                        error: null,
                                        success: 'Successfully Updated',
                                    });
                                })
                                .catch(err => {
                                    this.setState({
                                        success: null,
                                        error: 'Update failed.'
                                    });
                                });
                    })
                    .catch(err => {
                        this.setState({
                            success: null,
                            error: 'Current password is incorrect.'
                        });
                    })
            }
        } else {
            axios.put(`${process.env.REACT_APP_API_USERS}/${this.props.id}`, {email, firstName, lastName} , requestOptions)
                .then(response => {
                    this.setState({ 
                        error: null,
                        success: 'Successfully Updated',
                     });
                })
                .catch(err => {
                    this.setState({ 
                        success: null,
                        error: 'Update failed.' 
                    });
                });
        }
    }

    handleDelete = () => {
        this.toggleModal();
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        axios.delete(`${process.env.REACT_APP_API_USERS}/${this.props.id}`, requestOptions)
            .then(response => {
                localStorage.removeItem('jwt');
                this.props.resetStore();
                this.props.history.push('/deleted');
            })
            .catch(err => {
                this.setState({ 
                    success: null,
                    error: 'Delete failed.' 
                });
            });
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


    render() {
        const { email, currentpassword, password, repeatpassword, firstName, lastName, success, modal, error, tooltip1, tooltip2 } = this.state;
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

                <form className="account-form">
                    <h3>Account Details</h3>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={email} placeholder="email" onChange={this.onChange}/>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={this.onChange}/>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={this.onChange}/>

                    <h3>Update Password</h3>
                    <input type="password" name="currentpassword" value={currentpassword} placeholder="Current Password" onChange={this.onChange}/>
                    <div>
                        {tooltip1 ? (
                            <div className="message tooltip">
                                <p>8 characters minimum</p>
                            </div>
                        ) : (null)}
                        <input type="password" name="password" value={password} placeholder="New Password" onChange={this.passwordChange1} onFocus={this.showTooltip1} onBlur={this.hideTooltip1}/>
                    </div>
                    <div>
                        {tooltip2 ? (
                            <div className="message tooltip">
                                <p>8 characters minimum</p>
                            </div>
                        ) : (null)}
                        <input type="password" name="repeatpassword" value={repeatpassword} placeholder="Repeat New Password" onChange={this.passwordChange2} onFocus={this.showTooltip2} onBlur={this.hideTooltip2}/>
                    </div>

                    <div>
                        <a className="button delete" onClick={() => this.toggleModal()}>Delete Account</a>
                        <a className="button" onClick={this.handleUpdate}>Save</a>
                    </div>
                </form>

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

export default connect(mapStateToProps, { resetStore })(Account);