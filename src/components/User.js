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
                newPassword: '',
                repeatNewPassword: '',
                current: '',
                error: false,
                errorMessage: ''
            };
        }
    
        componentDidMount = () => {
       
        const id = localStorage.getItem('userId');
        console.log("User component id", id)
            axios.get(`http://localhost:5000/api/users/${id}`)
                .then(response => { 
                    console.log("Getting something", response)                                 
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
        
        changeEmail = () => {
            this.setState({
                current: "password"
            })
        }
        
       loadContent = () => {
           switch( this.state.current ) {
               case "password":
               return(
                <div className="main-wrap">
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
                            <input className="form-control" placeholder="Retype Password" name='repeatNewPassword' type="password" value={this.state.repeatNewPassword} onChange={this.handleInputChange} />
                        </div>                            
                        </div>
                    </div>
                        <button type="submit" className="signup-button" onClick={this.createUser}>
                        Confirm
                        </button>
                    <Link to="/user">
                    <button className="home-button">
                        Cancel
                        </button>
                    </Link>
                    </div>

               )

           }
       }
        render() {
            return (
                <div>                
                <div className="user-settings">
                <div className="settings">Username: {this.state.username} <button className="username-button" onClick={this.changeEmail}>Change </button></div>
                <div className="settings">Email: {this.state.email} <button className="email-button">Change</button> </div>
                <div className="settings">Password: ****************** <button className="password-button">Change</button> </div>
                </div>               
                <div className="content">{this.loadContent()}</div>
                  </div>
                    )
                }
            }
            
    export default User; 