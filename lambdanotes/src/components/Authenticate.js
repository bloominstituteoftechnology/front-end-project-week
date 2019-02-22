import React from 'react'
import Login from './Login'

const Authenticate = Home => {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                username: '',
                password: '',
                loggedIn: false,
            }
        }

        componentDidMount(){
            if (!localStorage.getItem('jwt')){
                this.setState({ loggedIn: false });
            } else {
                this.setState({ loggedIn: true });
            }
            console.log(this.state.username)
        }

        render(){
            if (this.state.loggedIn) return <Home {...this.state}/>;
            return <Login />;
        }
    }
}

export default Authenticate

