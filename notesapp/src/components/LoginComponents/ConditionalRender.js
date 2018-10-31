import React from 'react'
import App from '../../App'
import Authenticate from './Authenticate'
import Login from './Login'

class ConditionalRender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                {this.props.loggedIn ? <App/> : <Login />}
            </div>
        )
    }
}

export default Authenticate(ConditionalRender)