import React, { Component, Fragment } from 'react'
import styled from "react-emotion";
import axios from 'axios';
import { connect } from 'react-redux';



const Main = styled("main")`
  margin-left: 25%;
  width: 75%;
  min-height: 100vh;
  padding: 80px 45px 80px 35px;

  h1 {
    font-size: 4.5rem;
    font-weight: bold;
    color: #4A494A;
  }

  h2 {
    font-size: 2.7rem;
    font-weight: bold;
    color: #4A494A;
  }

  p {
    font-size: 1.7rem;
    line-height: 29px;
    letter-spacing: 1.3px;
  }

  form {
    display: flex;
  }

  label {
    font-size: 1.7rem;
    line-height: 29px;
    letter-spacing: 1.3px;
    margin-right: 5px;
  }

  button {
    display: flex;
    padding: 3px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #2AC0C4;
    border: solid 1px #939797;
    &:hover {
      background-color: #23a0a4;
      cursor: pointer;
    }
  }

  span {
    font-size: 2.3rem;
    font-weight: bold;
    color: red;
    text-shadow: .5px .5px .5px rgba(255, 0, 0, .1);
    
    &:hover {
      cursor: pointer;
    }
  }

  main {
    margin-top: 100px;

    section {
      margin-top: 20px;

      div {
        margin-bottom: 5px;
        margin-top: 15px;
        display: flex;
        p {
          margin-right: 5px;
        }
      }
    }
  }
`

export class UserProfile extends Component {

  state = {
    user: [],
    shouldEditUsername: false,
    shouldEditEmail: false,
    username: '',
    email: ''
  }

  componentDidMount() {
     if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt')
      const reqOptions = {
        headers: {
          Authorization: token,
        }
      }
      axios.get('http://localhost:8000/protected/user', reqOptions)
      .then(res => {
        this.setState({user: res.data})
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      this.props.history.push('/')
    }
  }

  handleOnChange = e => {
    this.setState({[e.target.name]: e.target.value})
  };


  shouldEditUsernameToggle = () => {
    this.setState(prevState => {
      return { shouldEditUsername: !prevState.shouldEditUsername }
    })
  }

  changeUsername = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwt')
    let content = {
      username: this.state.username
    }
    const reqOptions = {
      headers: {
        Authorization: token,
      }
    }
    axios.put(`http://localhost:8000/protected/user`, content, reqOptions)
    .then(res => {
      axios.get('http://localhost:8000/protected/user', reqOptions)
      .then(res => {
        this.setState({user: res.data})
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => console.log(err))
    this.setState({username: '', shouldEditUsername: false})
    this.props.logout();
  }

  shouldEditEmailToggle = () => {
    this.setState(prevState => {
      return { shouldEditEmail: !prevState.shouldEditEmail }
    })
  }

  changeEmail = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwt')
    let content = {
      email: this.state.email
    }
    const reqOptions = {
      headers: {
        Authorization: token,
      }
    }
    axios.put(`http://localhost:8000/protected/user`, content, reqOptions)
    .then(res => {
      axios.get('http://localhost:8000/protected/user', reqOptions)
      .then(res => {
        this.setState({user: res.data})
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => console.log(err))
    this.setState({email: '', shouldEditEmail: false})
  }

  render() {
    return (
      <Main>
        {this.state.user.length === 0 || this.props.notes.length === 0 ?
          <h2>Loading..</h2>
          :
          <Fragment>
            <header>
              <h1>{`Welcome, ${this.state.user[0].username}!`}</h1>
            </header>
            <main>
              <header>
                <h2>View and edit some of your information</h2>
              </header>
              <section>
                <div>
                  <p>{`Username: ${this.state.user[0].username}`}</p>
                  {!this.state.shouldEditUsername ?
                    <button onClick={this.shouldEditUsernameToggle}>Edit</button>
                    :
                    <span onClick={this.shouldEditUsernameToggle}>X</span>
                  }
                </div>
                {this.state.shouldEditUsername ?
                  <form onSubmit={this.changeUsername}>
                    <label htmlFor="username">Edit Username</label>
                    <input 
                      type="text"
                      id="username"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleOnChange}
                    />
                    <button type="submit">submit</button>
                  </form>
                  :
                  null
                }
                <div>
                  <p>{`email: ${this.state.user[0].email}`}</p>
                  {!this.state.shouldEditEmail ?
                    <button onClick={this.shouldEditEmailToggle}>Edit</button>
                    :
                    <span onClick={this.shouldEditEmailToggle}>X</span>
                  }
                </div>
                {this.state.shouldEditEmail ?
                  <form onSubmit={this.changeEmail}>
                    <label htmlFor="email">Edit Email</label>
                    <input 
                      type="text"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleOnChange}
                    />
                    <button type="submit">submit</button>
                  </form>
                  :
                  null
                }
                <div>
                  <p>{`Amount of notes: ${this.props.notes.length}`}</p>
                </div>
              </section>
            </main>
          </Fragment>
        }
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(
  mapStateToProps,
  {}
)(UserProfile);
