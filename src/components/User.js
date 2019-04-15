import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";



const backend = "https://contact-notes.herokuapp.com/";
// let backend = 'http://localhost:5000/';
// let heroku = 'https://lamb-notes.herokuapp.com/';
// if (typeof(backend) !== 'string') {
//   backend = heroku;
// }

class User extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                username: '',
                newUsername: '',
                email: '',
                newEmail: '',
                password: '',
                newPassword: '',
                verifyPassword: '',
                current: '',
                showForm: false,
                error: false,
                errorMessage: ''
            };
        }
    
        componentDidMount = () => {
       
        const id = localStorage.getItem('userId');
        // console.log("User component id", id)
            axios.get(`${backend}api/users/${id}`)
                .then(response => { 
                    // console.log("Getting something", response)                                 
                    this.setState({
                       username: response.data.username, 
                       email: response.data.email,
                    });     
                })
                .catch(err => {
                    // console.log(err)
                    this.setState({
                        error: true,
                        errorMessage: err.message
                    })
                })
        }

        updateUser = () => {
           let  user = {};

            if (this.state.current === "username") {
                user = {
                    username: this.state.newUsername
                }
            }

            else if (this.state.current === "email") {
                user = {
                    email: this.state.newEmail
                }
            }
            
            const id = localStorage.getItem('userId');
            axios.put(`${backend}api/users/update/${id}`, user)
            .then(response => { 
                // console.log("Getting something", response)                            
            })
            .catch(err => {
                // console.log(err)
                this.setState({
                    error: true,
                    errorMessage: err.message
                })
            })     

            this.setState({
               showForm: false,
            })
        }

        resetPassword = () => {
            let  user = {};
             if (this.state.current === "password") {
                user = {
                    password: this.state.password,
                    newPassword: this.state.newPassword,
                    verifyPassword: this.state.verifyPassword
                }
            }
            const id = localStorage.getItem('userId');
            axios.put(`${backend}api/users/resetpassword/${id}`, user)
            .then(response => { 
                // console.log("Getting something for password", response)                                           
            })
            .catch(err => {
                // console.log(err)
                this.setState({
                    error: true,
                    errorMessage: err.message
                })
            })
            
            this.setState({
                showForm: false,
             })
        }

        handleInputChange = event => {
            this.setState({ [event.target.name]: event.target.value });
        };  
        // all user update methods needs to be refactored for cleaner code
        changeEmail = () => {
            this.setState({
                current: "email",
                showForm: true
            })
        }

        changeUsername = () => {
            this.setState({
                current: "username",
                showForm: true
            })
        }
        changePassword = () => {
            this.setState({
                current: "password",
                showForm: true
            })
        }

        cancelSettings = () => {
            this.setState({
                showForm: false,
            })
        }
        
       loadContent = () => {
           switch( this.state.current ) {
               case "password":
               return (
                <div className="password-wrap">
                <div className="login-main">                    
                    <div className={this.state.error ? "error" : "hidden"}>
                        {this.state.errorMessage}
                    </div>
                    <div className='signup-form'>
                        <div className="form-group">
                            <input className="form-control" placeholder="Old password" name='password' type="password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="New Password" name='newPassword' type="password" value={this.state.newPassword} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Retype Password" name='verifyPassword' type="password" value={this.state.verifyPassword} onChange={this.handleInputChange} />
                        </div>                            
                        </div>
                    </div>
                        <button type="submit" className="signup-button" onClick={this.resetPassword}>
                        Confirm
                        </button>                    
                    <button className="home-button" onClick={this.cancelSettings}>
                        Cancel
                        </button>                    
                    </div>
                   )
               case "username":
               return (
                <div className='change-form'>
                <div className="form-group">
                <input className="form-control" placeholder="Username" name='newUsername' type="text" value={this.state.newUsername} onChange={this.handleInputChange} />
                </div>
                <button type="submit" className="signup-button" onClick={this.updateUser}>
                        Confirm
                        </button>                    
                    <button className="home-button" onClick={this.cancelSettings}>
                        Cancel
                        </button>                  
                     </div>
                 )
               case "email":
               return (
                <div className='change-form'>
                <div className="form-group">
                <input className="form-control" placeholder="Email" name='newEmail' type="text" value={this.state.newEmail} onChange={this.handleInputChange} />
                </div>
                <button type="submit" className="signup-button" onClick={this.updateUser}>
                        Confirm
                        </button>                
                    <button className="home-button" onClick={this.cancelSettings}>
                        Cancel
                        </button>                   
                </div>
               )
           }
       }
        render() {
            return (
                <div>                
                <div className="user-settings">
                <div className="settings"><div className="info-label">Username:</div><div className="info-data">{this.state.username}</div><button className="username-button" onClick={this.changeUsername}>Change </button></div>
                <div className="settings"><div className="info-label">Email:</div><div className="info-data_email"> {this.state.email}</div><button className="email-button" onClick={this.changeEmail}>Change</button> </div>
                <div className="settings">Password: ****************** <button className="password-button" onClick={this.changePassword}>Change</button> </div>
                </div> 
                {this.state.showForm ? (               
                <div className="content">{this.loadContent()}</div>
                ):(null)
                }
                  </div>
                    )
                }
            }
            
    export default User; 
