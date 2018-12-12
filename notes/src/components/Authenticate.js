import React from 'react';

import Login from './Login';

const Authenticate = App => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        if (localStorage.getItem('user') === 'darenlarson') {
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }
    }

    render() {
        if (this.state.loggedIn) {
            return <App />;
        } else return <Login />
    }
}

export default Authenticate;