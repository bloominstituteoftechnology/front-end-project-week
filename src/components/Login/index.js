import React, { Component } from 'react'
import { Input, Icon, Button } from 'semantic-ui-react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const URL = 'https://lambda-notes0706.herokuapp.com/api/auth/login'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      usernameOrEmail: '',
      password: '',
      invalid: null
    }
  }

    submitHandler = (event) => {
      event.preventDefault()
      const {
        usernameOrEmail,
        password
      } = this.state

      axios.post(URL, {
        username: usernameOrEmail,
        email: usernameOrEmail,
        password
      }).then(res => {
        if (res.data.token) {
          localStorage.setItem('jwt', res.data.token)
          localStorage.setItem('userId', res.data.id)
          this.props.history.push(`/${res.data.id}`)
        }
      }).catch(err => {
        if (err.response.status) {
          if (err.response.status === 401) {
            this.setState({ invalid: err.response.data })
          } else if (err.response.status === 400) {
            this.setState({ invalid: err.response.data[1] })
          } else {
            alert(`Error: ${err.response.status} ${err.response.data[1]}`)
          }
        } else {
          alert(`Error: ${err}`)
        }
      })
    }

    OnChange = (event) => {
      const {
        name,
        value
      } = event.target

      if (name === 'usernameOrEmail') {
        this.setState({
          [name]: value.replace(' ', '').toLowerCase(),
          invalid: null
        })
      } else {
        this.setState({
          [name]: value,
          invalid: null
        })
      }
    }

    render() {
      const {
        usernameOrEmail,
        password,
        invalid
      } = this.state

      return (
        <form
          autoComplete='off'
          className='content-sect'
          onSubmit={this.submitHandler}>
          <Input
            className={invalid
              ? 'error'
              : null}
            name='usernameOrEmail'
            type='text'
            icon
            iconPosition='left'
            placeholder='Username or Email'
            value={usernameOrEmail}
            onChange={this.OnChange}>
            <Icon name='user' />
            <input />
          </Input>
          {invalid
            ? <div className='error-message'>{invalid}</div>
            : null}
          <Input
            className={invalid
              ? 'error'
              : null}
            name='password'
            type='password'
            icon
            iconPosition='left'
            placeholder='Password'
            value={password}
            onChange={this.OnChange}>
            <Icon name='lock' />
            <input />
          </Input>
          {invalid
            ? <div className='error-message'>{invalid}</div>
            : null}
          <Button className='pacific-blue auth-btn'>Log In</Button>
        </form>
      )
    }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(Login)