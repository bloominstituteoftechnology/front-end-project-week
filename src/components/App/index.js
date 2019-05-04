import React, { Component } from 'react'
import {
  Sidebar,
  Button
} from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Navigation from '../Navigation'
import Routes from './Routes'
import AuthRoutes from './AuthRoutes'

import './index.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      width: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth)
  }

  updateWidth = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  logOut = () => {
    const TOKEN = localStorage.getItem('jwt')

    if (TOKEN) {
      localStorage.removeItem('jwt')
      localStorage.removeItem('userId')
      this.props.history.push('/')
    }
  }

  render()  {
    const TOKEN = localStorage.getItem('jwt')
    const USER_ID = localStorage.getItem('userId')

    const {
      isOpen,
      width
    } = this.state

    const {
      toggle,
      logOut
    } = this

    const { history } = this.props

    return (
      <Sidebar.Pushable>
        <Sidebar
          id='navigation-sidebar'
          animation='overlay'
          direction='right'
          visible={isOpen && width <= 768}
          onHide={toggle}>
          <SideBarBtns logOut={logOut} />
        </Sidebar>

        <Sidebar.Pusher dimmed={isOpen}>
          <div id='app'>
            <Navigation
              toggle={toggle}
              redirect={history.push} />
            {TOKEN && USER_ID
              ? <AuthRoutes />
              : <Routes />}
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

const SideBarBtns = ({ logOut }) => {
  const TOKEN = localStorage.getItem('jwt')
  const USER_ID = localStorage.getItem('userId')

  return (
    TOKEN && USER_ID
      ? [<Button
        key={0}
        as={Link}
        to={`/${USER_ID}`}
        className='pacific-blue'>
        View Notes
      </Button>,
      <Button
        key={1}
        as={Link}
        to={`/${USER_ID}/createnote`}
        className='pacific-blue'>
        + Create Note
      </Button>,
      <Button
        key={2}
        className='milano-red'
        onClick={logOut}>
        Log Out
      </Button>]
      : [<Button
        key={0}
        as={Link}
        className='pacific-blue'
        to='/signup'>
        Sign Up
      </Button>,
      <Button
        key={1}
        as={Link}
        className='pacific-blue'
        to='/login'>
        Log In
      </Button>]
  )
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(App)
