import React, { Component } from 'react'
import { Input, Icon, Button } from 'semantic-ui-react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const {
  REACT_APP_DEV_LOGIN,
  REACT_APP_PROD_LOGIN
} = process.env

const URL = REACT_APP_DEV_LOGIN || REACT_APP_PROD_LOGIN

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      invalid: null
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
    const {
      email,
      password
    } = this.state

    axios.post(URL, {
      email,
      password
    }).then(res => {
      if (res.data.token) {
        localStorage.setItem('jwt', res.data.token)
        this.props.history.push('/')
      }
    }).catch(err => {
      console.log('err', err.response)
    })
  }

  onChange = (event) => {
    const {
      name,
      value
    } = event.target

    if (name === 'email') {
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
      email,
      password,
      invalid
    } = this.state

    const {
      submitHandler,
      onChange
    } = this

    return (
      <form
        autoComplete='off'
        className='content-sect'
        onSubmit={submitHandler}>
        <Input
          className={invalid
            ? 'error'
            : null}
          name='email'
          type='text'
          icon
          iconPosition='left'
          placeholder='E-mail'
          value={email}
          onChange={onChange}>
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
          onChange={onChange}>
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