import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

const NoteView = () => {
  return (
    <div>
      <Link exact to="/">
        Home
      </Link>
      <br />
      <Link exact to="/editnote">
        Edit
      </Link>
      <SideMenu />
    </div>
  );
};

export default NoteView;
