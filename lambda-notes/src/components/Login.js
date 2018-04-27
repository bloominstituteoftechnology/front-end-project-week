import React from "react";

const Login = props => {
  return (
    <div className="login">
      <a
        className="sidebar__button csv__btn"
        onClick={() => props.authenticate("Github")}
      >
        Login with Github
      </a>
      <p className="username"> Welcome {props.user || null} </p>
    </div>
  );
};

export default Login;
