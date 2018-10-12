import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class User extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                username: '',
                email: '',
                password: '',
                error: false,
                errorMessage: ''
            };
        }
    
        componentDidMount = () => {
       
        const id = localStorage.getItem("userID");
            axios.get(`http://localhost:5000/api/users/${id}`)
                .then(response => {                                  
                    this.setState({
                       username: response.data.username, email: response.data.email
                    });     
                })
                .catch(err => {
                    console.log(err)
                    this.setState({
                        error: true,
                        errorMessage: err.message
                    })
                })
        }
            
        handleInputChange = event => {
            this.setState({ [event.target.name]: event.target.value });
        };
    
        render() {
            return (
                <div className="main-wrap">
                    <div className="login-main">                    
                        <div className={this.state.error ? "error" : "hidden"}>
                            {this.state.errorMessage}
                        </div>
                        <div className='signup-form'>
                            <div className="form-group">
                                <input className="form-control" placeholder="Old password" name='username' type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="New Password" name='password' type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Retype Password" name='password' type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    export default User; 