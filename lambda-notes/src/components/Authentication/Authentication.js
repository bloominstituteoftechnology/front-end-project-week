import React from "react";
import NotesPage from "../NotesContainer/NotesPage";
import axios from 'axios'
import '../../App.css';

const Authenticate = Posts =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                username: '',
                password: '',

                LoggedIn: false,
            };

        }
        

        nothing = e => {
            e.preventDefault()
        }

        change = e => {
            this.setState({ [e.target.name]: e.target.value })
        }

        register = e => {
            e.preventDefault();
            const name = this.state.username
            localStorage.setItem('username', name)
            if (name.length > 0) {
                axios.post('http://localhost:3500/api/register', this.state  )
            .then(res => {
                console.log(res.data)
                localStorage.setItem('jwt', res.data.token)
                this.setState({LoggedIn: true})
            })
            .catch(err => {
                console.log(err)
            })
            }
            

        }

        login = e => {
            e.preventDefault();
            const name = this.state.username
            localStorage.setItem('username', name)
            if (name.length > 0) {
                axios.post('http://localhost:3500/api/login', this.state )
            .then(res => {
                console.log(res.data)
                localStorage.setItem('jwt', res.data.token)
                this.setState({LoggedIn: true})
            }).catch(err => {
                console.log(err.response)
                this.setState({res: err.response.data.message})
            })
            }
            
        }


        logout = e => {
            this.setState({ LoggedIn: false })
            this.setState({ username: '', password: '' })
            localStorage.removeItem('jwt')
            localStorage.removeItem('username')
        }

        render() {
            if (this.state.LoggedIn) {
                return <NotesPage logged={this.state.LoggedIn} logout={this.logout} />
            }
            else {
                return (
                    <div className='App'>

                        <form onSubmit={this.nothing}>
                            <div>
                                username: <input
                                autoComplete='off'
                                    type='text'
                                    name='username'
                                    value={this.state.username}
                                    onChange={this.change}
                                ></input>
                            </div>


                            <br />

                            <div>
                                password: <input
                                autoComplete='off'
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.change}
                                ></input>
                            </div>


                            <br />

                            <button
                                type='submit' onClick={this.login}>
                                Login
                            </button>

                            <button
                                type='submit' onClick={this.register}>
                                Register
                            </button>
                        </form>
                        
                    </div>
                )
            }

        }
    };

export default Authenticate;

