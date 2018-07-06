import React from "react";
import axios from "axios";

class Email extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: this.props.email,
            success: null,
            error: null
        }
    }


    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleUpdate = () => {
        const token = localStorage.getItem('jwt');
        const requestOptions = { headers: { Authorization: token } };
        const { email } = this.state;

        axios.put(`${process.env.REACT_APP_API_USERS}/${this.props.id}`, {email}, requestOptions)
            .then()
    }

    render() {
        return (
            <form action="">
                <label htmlFor="email">Email:</label>
                    <input type="email" name="email" autoComplete="email" value={email} placeholder="email" onChange={this.onChange}/>
                <a className="button" onClick={this.handleUpdate}>Save</a>
            </form>
        );
    }
}