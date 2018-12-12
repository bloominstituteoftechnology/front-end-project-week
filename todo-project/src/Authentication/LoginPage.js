import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from '../Login/Login.js'
import Register from '../Register/Register.js'

class LoginPage extends Component {


    render() {
        return(
            <div>
                <Route path='/' component={Login} />
                <Route path='/register'component={Register} />
            </div>
        )
    }
}

export default LoginPage;