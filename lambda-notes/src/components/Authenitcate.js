import React from 'react';

const Authenitcate = App => LoginPage => {
    return class extends React.Component {
        constructor(){
            super();
            this.state ={
                loggedIn: false,
            }
        }

        componentDidMount() {
            const storedUser = JSON.parse(localStorage.getItem('lambdanotes-username'));
            if (storedUser){
                this.setState({ loggedIn: true });
            }
        }

        render() {
            return this.state.loggedIn ? <App /> : <LoginPage />
        }
    }
}

export default Authenitcate;