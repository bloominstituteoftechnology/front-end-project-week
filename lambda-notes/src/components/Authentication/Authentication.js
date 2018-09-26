import React from "react";
import NotesPage from "../NotesContainer/NotesPage";

const Authenticate = Posts =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                username: '',
                password: '',
                LoggedIn: false
            };
        }

        change = e => {
            this.setState({ [e.target.name]: e.target.value })
        }

        newUser = e => {
            e.preventDefault();
            const name = this.state.username
            localStorage.setItem( 'username', name )
            if (name.length > 0) {
                this.setState({ LoggedIn: true})
            }

        }


        logout = e => {
            this.setState({LoggedIn: false})
            this.setState({username: '', password: ''})
            localStorage.removeItem('jwt')
          }

        render() {
            if (this.state.LoggedIn) {
                return <NotesPage logged={this.state.LoggedIn} logout={this.logout} />
            }
            else {
                return (        
                    <div>
                        <form onSubmit={this.newUser}>
                            username: <input
                                type='text'
                                name='username'
                                value={this.state.username}
                                onChange={this.change}
                            />

                            <hr />

                            password: <input
                                type='password'
                                name='password'
                                value={this.state.password}
                                onChange={this.change}
                            />

                            <hr />

                            <button
                            type='submit'>
                            Log In
                            </button>
                        </form>
                    </div>
            )
            }
            
        }
    };

export default Authenticate;

