import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="box">
        <img className="my-3" src={require('../images/logo.png')} alt="logo" />
        <div className="display-4 title-color">Lambda Notes</div>
        <div className="landing-page-btn">
          <br />
          <Link to="/signup" className="btn btn-block btn-styling">
            Register
          </Link>
          <Link to="/signin" className="btn btn-block btn-styling">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
