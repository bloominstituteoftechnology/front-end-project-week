import React from 'react';
import LoginForm from './LoginForm';
import App from './../App';
import { Route, withRouter } from 'react-router-dom';


class Authenticate extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            username: '',
            password: '',
            loginError: false,
            loading: false
        }
    }
    componentDidMount() {
        if (localStorage.getItem('username') === 'username' && localStorage.getItem('password') === 'password') {
            this.setState({ isLoggedIn: true });
        }
        else {
          this.setState({ isLoggedIn: false });
          this.props.history.push('/login');
        }
    }
    loginUser = (name, pass) => {
        this.setState({ loading: true })
    
        if (name === 'username' && pass === 'password') {
    
          localStorage.setItem('username', name);
          localStorage.setItem('password', pass);
          
          this.setState({
            username: name,
            password: pass,
            isLoggedIn: true,
            loginError: false,
            loading: false,
          })
          this.props.history.push(`/`);
          
        }
        else {
          this.setState({
            isLoggedIn: false,
            loginError: true,
            loading: false
          })
          this.props.history.push(`/login`);
        }
    }
    
    render() {
        return(
            <div>
                {this.state.isLoggedIn === false ?
                <div className="login-container">
                  <div className="text-center welcome">
                    <Route exact path="/login" render={props => 
                      <LoginForm {...props} loginUser={this.loginUser}/>
                    }/>
                  </div>
                </div>
                  :
                  <App /> 
                }
            </div>
        )
    }
  }
export default withRouter(Authenticate);