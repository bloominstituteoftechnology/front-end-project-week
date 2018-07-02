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
        error: ''
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
        if (this.state.password) {
            if (this.state.password !== this.state.repeatpassword) {
                this.setState({
                    success: null,
                    error: 'New passwords do not match.'
                })
            } else {
                axios.post(`${process.env.REACT_APP_API_AUTH}/login`, { email: this.state.email, password: this.state.currentpassword })
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
            axios.put(`${process.env.REACT_APP_API_USERS}/${this.props.id}`, this.state , requestOptions)
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


    render() {
        const { email, currentpassword, password, repeatpassword, firstName, lastName, success, modal, error } = this.state;
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
                    <input type="password" name="password" value={password} placeholder="New Password" onChange={this.onChange}/>
                    <input type="password" name="repeatpassword" value={repeatpassword} placeholder="Repeat New Password" onChange={this.onChange}/>
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