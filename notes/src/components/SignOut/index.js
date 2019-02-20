import React from "react";

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => {
  return (
    <button type="button" onClick={firebase.doSignOut}>
      Sign Out
    </button>
  );
};

export default withFirebase(SignOutButton);
