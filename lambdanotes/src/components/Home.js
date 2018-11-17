import React from 'react'
import logo from '../logo.svg';

import App from '../App'
import Authenticate from './Authenticate'
import PropTypes from 'prop-types';


class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        console.log(this.props)
    }

 

    render(){
        console.log(localStorage.getItem('user'))
        console.log(localStorage.getItem('password'))

        return (
            <div>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <App />
            </div>
        )
    }
}

Home.defaultProps = {
    data: []
}

Home.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            likes: PropTypes.number,
        })
    ).isRequired
};



export default Authenticate(Home)