import React from "react";

const GenericForm = props => {
  const heading = props.type === "register" ? "Sign Up:" : "Sign In:";
  const buttonName = props.type === "register" ? "Register Account" : "Log In";

  return (
    <div>
      <h2>{heading}</h2>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username..."
          value={props.username}
          onChange={props.handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          value={props.password}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleFormSubmit}>{buttonName}</button>
      </form>
    </div>
  );
};

export default GenericForm;
