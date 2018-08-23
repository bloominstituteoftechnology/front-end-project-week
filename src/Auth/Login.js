import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import axios from 'axios'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      hasRegistered: true,
      wrongCredentials: false,
      windowHeight: undefined,
      windowWidth: undefined
    }
  }
  handleResize = () =>
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    })
  componentDidMount () {
    this.updateCanvas()
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  updateCanvas () {
    let pi = Math.PI
    const cv = this.refs.canvas
    let co = cv.getContext('2d')
    const w = (cv.width = window.innerWidth)
    const h = (cv.height = window.innerHeight)
    co.strokeStyle = 'rgba(224,0,224,0.5)'

    let init = []
    let raindrops = 3500
    for (let i = 0; i < raindrops; i++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10
      })
    }

    let particles = []
    for (let b = 0; b < raindrops; b++) {
      particles[b] = init[b]
    }

    function draw () {
      co.clearRect(0, 0, w, h)
      for (let c = 0; c < particles.length; c++) {
        let p = particles[c]
        co.beginPath()
        co.moveTo(p.x, p.y)
        co.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys)
        co.stroke()
      }
      move()
    }

    function cloud () {
      co.beginPath()
      co.fillStyle = 'grey'
      co.arc(30, 10, 50, 0, 2 * pi)
      co.arc(60, 10, 60, 0, 2 * pi)
      co.arc(100, 10, 40, 0, 2 * pi)
      co.arc(150, 10, 50, 0, 2 * pi)
      co.arc(200, 10, 70, 0, 2 * pi)
      co.arc(260, 10, 60, 0, 2 * pi)
      co.arc(300, 10, 40, 0, 2 * pi)
      co.arc(350, 10, 50, 0, 2 * pi)
      co.arc(400, 10, 70, 0, 2 * pi)
      co.arc(450, 10, 50, 0, 2 * pi)
      co.arc(500, 10, 40, 0, 2 * pi)
      co.arc(550, 10, 50, 0, 2 * pi)
      co.arc(660, 10, 70, 0, 2 * pi)
      co.arc(700, 10, 60, 0, 2 * pi)
      co.arc(760, 10, 80, 0, 2 * pi)
      co.arc(790, 10, 70, 0, 2 * pi)
      co.arc(800, 10, 40, 0, 2 * pi)
      co.arc(860, 10, 70, 0, 2 * pi)
      co.arc(900, 10, 70, 0, 2 * pi)
      co.arc(950, 10, 50, 0, 2 * pi)
      co.arc(1000, 10, 70, 0, 2 * pi)
      co.arc(1060, 10, 70, 0, 2 * pi)

      co.fill()
      co.closePath()
    }
    function createMountainRange (mountainAmount, height, color) {
      for (var i = 0; i < mountainAmount; i++) {
        var mountainWidth = w / mountainAmount
        co.beginPath()
        co.moveTo(i * mountainWidth, h)
        co.lineTo(i * mountainWidth + mountainWidth + 325, h)
        co.lineTo(i * mountainWidth + mountainWidth / 2, h - height)
        co.lineTo(i * mountainWidth - 325, h)
        co.fillStyle = color
        // co.shadowColor = '#E3EAEF'
        // co.shadowBlur = 10
        co.fill()
        co.closePath()
        co.restore()
      }
    }

    function paint () {
      cloud()
      createMountainRange(1, h - 550, '#384551')
      createMountainRange(2, h - 600, '#2B3843')
      createMountainRange(3, h - 700, '#26333E')
      requestAnimationFrame(paint)
    }

    function move () {
      for (let b = 0; b < particles.length; b++) {
        let p = particles[b]
        p.x += p.xs
        p.y += p.ys
        if (p.x > w || p.y > h) {
          p.x = Math.random() * w
          p.y = -20
        }
      }
    }

    setInterval(draw, 13)

    paint()
  }

  renderField = (field) => {
    const { touched, error } = field.meta
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <input
          className='form-control'
          type={field.type}
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className='text-help' style={{ color: 'red' }}>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  handleLogin = (values, cb) => {
    axios
      .post('http://localhost:8000/auth/login', values)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.token))
        cb()
      })
      .catch((err) => {
        console.log(err)
        this.setState({ wrongCredentials: true })
      })
  }
  handleRegister = (values, cb) => {
    console.log('METHOD')
    axios
      .post('http://localhost:8000/auth/register', values)
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.token))
        cb()
      })
      .catch((err) => console.log(err))
  }
  onSubmit = (values) => {
    if (this.state.hasRegistered === false) {
      this.handleRegister(values, () => {
        this.props.history.push('/')
      })
    } else {
      this.handleLogin(values, () => {
        this.props.history.push('/')
      })
    }
  }
  handleSwitch = () => {
    this.setState((prevState) => ({
      hasRegistered: !prevState.hasRegistered
    }))
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <div className='Auth-container'>
        <canvas className='canvas' ref='canvas' width={300} height={300}>
          {this.state.windowWidth} * {this.state.windowHeight}
        </canvas>
        <div className='form-container'>
          <HandleFormDisplay hasRegistered={this.state.hasRegistered} />
          <label
            className='credentials-msg'
            style={
              this.state.wrongCredentials ? (
                { display: 'block' }
              ) : (
                { display: 'none' }
              )
            }
          >
            Invalid Credentials, please try again or Sign up!
          </label>
          <form
            className='needs-validation'
            onSubmit={
              this.state.hasRegistered ? (
                handleSubmit(this.onSubmit)
              ) : (
                handleSubmit(this.onSubmit)
              )
            }
          >
            <Field
              name='username'
              placeholder='username'
              type='text'
              component={this.renderField}
            />
            <Field
              name='password'
              type='password'
              placeholder='password'
              component={this.renderField}
            />
            <button type='submit'>
              {this.state.hasRegistered ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <div className='form-btn' onClick={this.handleSwitch}>
            {this.state.hasRegistered ? 'Or SignUp!' : 'Back to login'}
          </div>
        </div>
      </div>
    )
  }
}
const HandleFormDisplay = (props) => {
  if (props.hasRegistered === true) {
    return <div>Login Form</div>
  } else {
    return <div>Register Form</div>
  }
}

function validate (values) {
  const errors = {}
  if (!values.username) {
    errors.username = 'Must Enter your username or Register'
  }
  if (!values.password) {
    errors.password = 'Must Enter a Password'
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'loginForm'
})(Login)
