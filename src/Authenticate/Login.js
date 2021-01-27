import React from 'react';
import './login.css';
import axios from 'axios';

//const url = process.env.REACT_APP_LOCAL_URL;
//const url = process.env.REACT_APP_DEPLOY_URL;

class Login extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    }

    handleInputChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    };

    checkUserName = (userCredential) => {
        var valid = true;
        if (!userCredential[0].match(/[a-z]/i)) valid = false; // first character is not a letter
        if (userCredential.length < 3) valid = false; // less than 8 characters
        //if (userCredential.match(/\d+/g) == null) good = false; //contains no numbers
        return valid;
    }

    handleRegister = (e) => {
        e.preventDefault()
        const userData = {
            username: this.state.username,
            password: this.state.password
        }

        if (!this.checkUserName(userData.username) || !this.checkUserName(userData.password)) {
            alert('Username and password must be at least 3 charcter long and string')
        } else {

            if(!userData.username && !userData.password) { 
                alert('Please enter uername and password') 
            } else {
                const postUrl = `${process.env.REACT_APP_DEPLOY_URL}/api/users/register/`;
                console.log("POST ....  ",postUrl)
                axios.post(`${postUrl}`, userData) 
                    .then(res => {
                        if (res.status === 201) {
                            alert("Registered Successfully 👍 " + userData.username + "\nCan proceed and login")
                        }
                    })
                    .catch(err => {
                        if(err.response.status === 409) {
                            alert("Username already exists 😲 " + userData.username + "\nTry to register with another username")
                        } else {
                            console.log("Error " ,err)
                        }
                    })
            }
        }
    }

    handleLoginSubmit = (e) => {
        e.preventDefault()
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        if(!userData.username && !userData.password) { 
            alert('Please enter uername and password') 
        } else {
            axios.post(`${process.env.REACT_APP_DEPLOY_URL}/api/users/login`, userData)  
                 .then(res => {
                    // console.log("res login  : ", res.status, "\n\n",res.data.token) 
                    if(res.status === 200) {
                        localStorage.setItem('user', this.state.username)
                        localStorage.setItem('userToken', res.data.token)
                        //window.location.reload(true);   
                        window.location.replace('/notes')
                 
                    }
                  })
                  .catch(err => {
                       if(err.response.status === 401) {
                           alert('Need to register first..\nOr check the username and password');
                       }
                   })
        }
    }

    render() {
        return (
            <div className = "Formdiv">
                <h1>Welcome to My Notes app</h1>
                <p style = {{marginLeft:'0'}}>Login / Register Page...</p>

                <form>
                    <div className = "Fieldwrap">
                        <label>Username &nbsp; : </label>
                        <input 
                            type = "text"
                            name = "username"
                            value = {this.state.username}
                            onChange = {this.handleInputChange}
                        />
                    {/* </div> */}
     
                        <label>Password &nbsp; : </label>
                        <input style = {{marginBottom: "50px"}}
                            type = "password"
                            name = "password"
                            value = {this.state.password}
                            onChange = {this.handleInputChange}
                        />
                    </div>                  
                    <button onClick = {this.handleLoginSubmit} style = {{backgroundColor : "#07917a" ,marginLeft: "188px", width: "200px", fontSize: "20px", borderRadius:"8px"}} > 
                        Login 
                    </button>
                    <p style = {{borderBottom : "2.5px solid #07917a" ,
                                 marginLeft: "258px",
                                 width:'62px',
                                 paddingBottom: '8px',
                                 cursor: 'pointer' 
                                }} 
                        onClick = {this.handleRegister}
                    > 
                        Register
                    </p>
                               
                </form>
            </div>
        )
    }
}

export default Login;
