import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="col-9 right__side">
      <div className="row">
        <div className="col-12 intro">
          <div className="intro__heading">
            <h1>Welcome to Lambda Notes</h1>
            <Link to="/displayNotes">
              <button>Let's Start</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
