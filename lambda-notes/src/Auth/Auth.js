import React from 'react'
import Login from './Login'

const Authenticate = (App) => {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        loggedIn: false
      }
    }
    componentDidMount () {
      if (
        window.localStorage.getItem('username') &&
        window.localStorage.getItem('password')
      ) {
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    }

    logOut = () => {
      this.setState({ loggedIn: false })
      window.localStorage.removeItem('username')
      window.localStorage.removeItem('password')
    }

    render () {
      return this.state.loggedIn ? <App logOut={this.logOut} /> : <Login />
    }
  }
}
export default Authenticate
