import React from "react";

import "./homepageStyle.css";

const Homepage = props => {
  return (
    <div className="home container">
      <div className="title">
        <h1>Notes</h1>
        <button onClick={props.homepageToggle} className="signupBTN">
          sign in/up
        </button>
      </div>
      <div className="homeNote">
        <p className="desciption">
          Write some words of wisdom or a just random thought you want to
          remember. Whatever it is we'll keep it for you.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
