import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Login from './login';
import Register from './register';
import Header from './header';

// import {
//     createUser,
//     loginUser,
//     } from '../../actions';
    
class Welcome extends Component{
    
    createUser = (newUser) => {
        axios.post('https://lambda-notes-backend-mjk.herokuapp.com/api/welcome/register/', newUser).then(res => {
            localStorage.setItem('JWT', res.data.token)
            localStorage.setItem('username', res.data.username)
            this.props.history.push('/all-notes')
        }).catch(err => {console.log(err.message)})
    }

    loginUser2 = (creds) => {
        axios.post('https://lambda-notes-backend-mjk.herokuapp.com/api/welcome/login', creds).then(res => {
            localStorage.setItem('JWT', res.data.token)
            localStorage.setItem('username', res.data.username)
            this.props.history.push('/all-notes')
        }).catch(err => {console.log(err.message)})
    }

    render(props){
        // console.log(this.props)
        return(
            <WelcomeDiv>
                <Route path="/" component={Header} />
                <Route path="/welcome/login" render={() => {
                    return <Login failed={(this.props.state.failedLoginAttempt)? true : false} loginUser={this.loginUser2} />}} />
                <Route path="/welcome/register" render={() => {
                    return <Register failed={this.props.state.failedRegistrationAttempt} createUser={this.createUser} />}} />
            </WelcomeDiv>
        )
    }
}

const mapStateToProps = store => {
    return {state: store};//state is really props & store is store
  }
  
  const mapDispatchToProps = {
    // createUser,
    // loginUser
  }

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)

const WelcomeDiv = styled.div`
    ${'' /* border: 1px solid red; */}
    display: flex;
    flex-direction: column;
    align-items: center;
    .links{
        width: 100%;
        height: 40px;
        ${'' /* border: 1px solid green; */}
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    Link{
        padding: 10px;
    }
`;