import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './About.css';

class About extends Component {

    render() {
        return (
            <div className='about'>
                <h4>Welcome to the Lambda Notes!</h4>
                <h5>To view, edit, and create notes you must be logged in. If you would like to have an account please feel free to click on the sign up button to register.</h5>
            </div>
        )
    }
}; 

export default withRouter(About); 