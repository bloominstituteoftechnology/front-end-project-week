import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'

const WelcomePage = (props) => {
    console.log('logging props in welcome-page', props)
    return (
        <div className = "welcome-page">
            <p>Thank-you for visiting Lambda Notes!</p>
         </div> 
    )
}

export default WelcomePage;