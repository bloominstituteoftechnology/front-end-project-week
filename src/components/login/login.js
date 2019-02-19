import React, { Component } from 'react';
import axios from 'axios';
//import User from './user';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/usersActions.js';
import '../../App.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            username: "",
            password: "",
            display: true,
            disabled: true,
            userList: [],
            userInfo: []
        })
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    /*  handleSubmit = event => {
         event.preventDefault();
         const credentials = this.state;
         const endpoint = 'http://localhost:5000/api/users/login';
         axios.post(endpoint, credentials)
             .then(res => {
                 console.log('reponse data from login', res.data);
                 localStorage.setItem('jwt', res.data.token);
                 alert("login successful")
                 const name = "";
                 const password = "";
                 this.setState({ username: name, password: password })
                 console.log("this.state is: ", this.state)
             }).catch(err => {
                 console.log('err from login', err);
             });
     } */
    // ********* USER LOGIN **************************
    login = (e) => {
        e.preventDefault();
        if (this.state.username && this.state.password) {
            const userInfo =
            {
                username: this.state.username,
                password: this.state.password

            };
           // const endpoint = 'http://localhost:5000/api/users/login';
            axios
                .post('http://localhost:5000/api/users/login', userInfo)
                .then(res => {
                    console.log('reponse data from login', res.data);
                    localStorage.setItem('jwt', res.data.token);
                    alert('Login successful...');
                    const passWord = "";
                    const userName = "";
                    this.setState(() => ({ username: userName, password: passWord, display: false, disabled: false }))
                    console.log("ready to go to noteList")
                    this.props.noteList(e);
                })
                .catch(err => {
                    console.error('err from login', err);
                });
        } else {
            alert('Please enter a username, password and department')
        }
    }

    // ************ USER REGISTER ***************************
    register = (e) => {
        e.preventDefault();
        if (this.state.username && this.state.password) {
            const userInfo =
            {
                username: this.state.username,
                password: this.state.password

            };
            console.log("state.username:", userInfo)
           //  this.props.registerUser(userInfo);
            //console.log("password:", password)
            /*    const regUser = (userInfo) => {
                   this.props.registerUser(userInfo);
              }
               
              regUser(); */
            axios
                .post('http://localhost:5000/api/users/register', userInfo)
                .then(response => {
                    alert('registration complete...')
                    let passWord = "";
                    let userName = "";

                    this.setState(() => ({ username: userName, password: passWord }))
                })
                .catch(error => {
                    console.error('Server Error', error);
                });


        } else {
            alert('Please enter a username and password')
        }
    }

    // ************ GET USER LIST *******************
    /*   userList = (e) => {
          e.preventDefault();
          const token = localStorage.getItem('jwt');
          const endpoint = 'http://localhost:5000/api/users/login';
          const options = {
              headers: {
                  Authorization: token
              }
          };
          axios
              .get('http://localhost:3300/api/users/', options)
              //.then(res => {
              .then(response => {
                  console.log("reponse.data", response.data)
                  //let tmpArray2 = []; 
                  let tmpArray = [];
                  //const tmpArray2 = response.data;
  
                  for (let x = 0; x < response.data.length; x++) {
                      tmpArray.push(response.data[x].username)
                  }
  
                  this.setState(() => ({ userList: tmpArray }))
              })
  
  
  
  
              //  console.log('data from /api/users', response.data);
              //  this.setState({ users: res.data })
              // })
  
              //.then(response => {
              // let tmpArray = [];
              // for (let x = 0; x < response.data.length; x++) {
              //   tmpArray.push(response.data[x].username)
              //  }
              //  this.setState(() => ({ userList: tmpArray }));
              //})
              .catch(error => {
                  console.error('Server Error', error);
              });
      } */
    //************************************ */

    /*   Axios.get(endpoint, options)
        .then(res => {
          console.log('data from /api/users', res.data);
          this.setState({ users: res.data })
        }).catch(err => {
          console.log('error from api/users', err)
        })
  
    } */


    // ***************** USER LOGOUT **************************
    logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwt')
        alert("User has successfully signed out")
        this.setState(() => ({ userList: [], display: true, disabled: true }));
    }


    /*    axios
         .post('http://localhost:3300/api/logout')
         .then(response => {
           alert('logout successful')
           this.setState(() => ({ userList: [], display: true, disabled: true }));
         })
         .catch(error => {
           console.error('Server Error', error);
         });
     } */

    // **** USER MESSAGE JUST SOME HUMOR *****
    message = () => {
        alert("Sorry, we dont know it either... #BestSecurityEver");
    }

    render() {
        // *** CODE TO CHANGE THE LOGOUT AND USERLIST BUTTONS TEXT COLOR ****
        let classNames = require('classnames');

        let btnClass = classNames({
            btnLogout: true,
            'btnNoWork': this.state.display
        })
        return (

<div className="form-container">
           
            <form className="main-form" onSubmit={this.login}> 
            <h2 className="main-title">Lambda Notes App</h2>
            <div className="header-text">Please register if you are a new user. Enter your email address, create a password and then
            press the Register button. Use the same email and password to Login.</div>
                <Input type="text" id="username" value={this.state.username} name='username' className="form-control" placeholder="Enter Email" onChange={this.handleInputChange} />
                <Input type="text" id="password" value={this.state.password} name='password' className="form-control" placeholder="Enter Password" onChange={this.handleInputChange} />


                <button type="button" className="btn-register" value="register" onClick={this.register} name="viewHome" id="register">Register</button>
                <button type="submit" className="btn-login" value="login" onSubmit={this.login} name="viewHome" id="login">Login</button>
               {/*  <button type="button" className={btnClass} disabled={this.state.disabled} value="user-list" id="user-list" onClick={this.userList} name="viewHome">User List</button> */}
                <button type="button" className={btnClass} disabled={this.state.disabled} value="logout" id="logout" onClick={this.logout} name="viewHome">Logout</button>
               {/*  <input type="submit" value="Submit" /> */}
            </form>
            </div>


        );
    }
}
const mapStateToProps = state => {
    //const { singleNoteReducer } = state;
    return {
        error: state.usersReducer.error
        /* noteSelected: state.singleNoteReducer.noteSelected */
    };
};

export default connect(mapStateToProps, {
    registerUser
})(Login);