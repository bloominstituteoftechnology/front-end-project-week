import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: '',
      };
    }
  
    validateForm = () => {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    handleSubmit = e => {
      e.preventDefault();
    }
  
    render() {
        return (
            <div className="login">
            <p>Please sign in by typing your email and any password, we will take care of it.</p>
                <form onSubmit={this.handleSubmit}>
                    
                    <input
                        type="email"
                        name = 'email'
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name = 'password'
                    />
                    <Link to = '/NotesList' className = 'link'>
                        <button
                            block
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                        Login
                        </button>
                    </Link>
                </form>
            </div>
        );
    }
}
