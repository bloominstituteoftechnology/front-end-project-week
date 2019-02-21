import React from "react";
import { Button } from "react-bootstrap";

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => {
  return (
    <Button
      variant="link"
      type="button"
      onClick={firebase.doSignOut}
      style={{
        textDecoration: "none",
        color: "rgb(147, 29, 36)",
        opacity: "0.7",
        marginTop: "20px"
      }}
    >
      Sign Out
    </Button>
  );
};

export default withFirebase(SignOutButton);
