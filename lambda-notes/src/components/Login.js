import React from 'react';
import { connect } from 'react-redux';

import {view_button_click, load_user_notes} from '../actions/index';

import './css/Login.css';

class Login extends React.Component {
    state = {
        user: '',
        pass: '',
    }

    render() {
        return (
            <div className='login'>
            <div className='login-body' >
                <h1 className='login-header'> Sign In To Your Notes</h1>
                <input placeholder='username' value={this.state.user} onChange={this.handleUserChange}/>
                <input type='password' placeholder='password' value={this.state.pass} onChange={this.handlePassChange}/>
                <button className='login-button' onClick={this.loginClicked}> Login </button>
            </div>    
            </div>
        )
    }

    handleUserChange = event => {
        this.setState({ user: event.target.value });
      };
      handlePassChange = event => {
        this.setState({ pass: event.target.value });
      };
    loginClicked = () => {
        let flag = false;
        let userIndex = -1;
        this.props.users.forEach((user, index) => {
            if (user.username === this.state.user && user.password === this.state.pass) {
                flag = true;
                userIndex = index;
        }})
        if (flag) {
        const usersNotes = (this.props.users[userIndex].notes);
        this.props.load_user_notes(usersNotes);
        this.props.view_button_click();
        }
        else {
            alert('You entered an incorrect username or password.')
            this.setState({user:'',pass:''})
        }
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, {view_button_click, load_user_notes})(Login);