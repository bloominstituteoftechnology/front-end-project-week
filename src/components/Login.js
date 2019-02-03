import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
    state = {
        username: '',
        password: '',
    };
  render() {
    return (
      <form onSubmit={this.login}>
          <div>
            <label>Username</label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </div>
          <div>
            <button type = "submit">Login</button>
            <NavLink exact to="/signup" className="nav-text" activeClassName="active-component"><p>Don't have an account? Sign up</p> </NavLink>
          </div>

      </form>
    );
  }
  handleChange = event => {
      const { name , value } = event.target;

      this.setState({ [name]: value });
  };
  login = event => {
      event.preventDefault();

      axios.post('http://localhost:2200/api/login', this.state)
      .then( res => {
        console.log(res.data);
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/notes');
      })
      .catch(err => {
          console.error(err);
      })
    
  };
}

export default Login;

































// import React from 'react';



// class Login extends React.Component {
//     constructor(props){
//     super(props);
//     this.state = {
//         username: '',
//         password: ''
//         };
//     }


//     handleInputChange = e => {
//         this.setState({[e.target.name]: e.target.value});
//     }

//     handleLoginSubmit = e => {
//         const user = this.state.username;
//         localStorage.setItem('user',user);
//         window.location.reload();

//     };
    
//     render(){
//         return (  
//             <form className="login-container">
//             <h3> Lambda Notes </h3>
//                 <input
//                     name="username"
//                     type="text" 
//                     placeholder="User Name"
//                     value={this.state.username}
//                     onChange= {this.handleInputChange}
//                  />
//                 <input 
//                     name="password"
//                     type="text"
//                     placeholder="Password" 
//                     value={this.state.password}
//                     onChange={this.handleInputChange}
//                 />
//                 <br />
//                 <button color="success" onClick={this.handleLoginSubmit}>
//                 Log In 
//                 </button>
//                 </form>
//         );
//     }
// }
 
// export default Login;