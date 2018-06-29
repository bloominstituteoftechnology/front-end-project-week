import React from "react";
import { Link } from "react-router-dom";
import "../styling/SideNav.css";
import { Create } from '@material-ui/icons'

/* top half of ternary is specifically for the SideNav mounted on the NoteView page
so that it can execute the onClick function to close the modal for delete.
 second half of ternary is for SideNav mounted on other pages where that onClick is unnecessary.
 The reason for this is that the app crashed whenever a person went to a different page
 because the SideNav component referenced the onClick but wasn't given the onClick
 and because the root component doesn't have the onClick (and can't, because that's not what it's tied to),
 it felt like this would be the easier way to go about it with limited time. */
const SideNav = props => {
  return (
    <React.Fragment>
      {props.match ? (
        <div
          className="nav sideNav"
          style={{
            background: props.deleting ? "gray" : "#D8D8D8",
            opacity: props.deleting ? ".5" : "1",
            borderRight: props.deleting
              ? "1px solid gray"
              : "#979797 1px solid",
            height: "100vh"
          }}
          onClick={() => props.cancelDelete()}
        >
          <h1
            className="headingforSideNav"
            onClick={() => props.cancelDelete()}
          >
            {" "}
            Lambda Notes{" "}
          </h1>
          <div
            className="buttonStyle"
            style={{ opacity: props.deleting ? ".6" : "1" }}
            onClick={() => props.cancelDelete()}
          >
            <Link to="/notes">
              <button> View Your Notes </button>
            </Link>
          </div>
          <div
            className="buttonStyle"
            style={{ opacity: props.deleting ? ".6" : "1" }}
          >
            <Link to="/create" style={{textDecoration: 'none'}}>
            <i className="material-icons" style={{ color: 'white', textDecoration: 'none', fontSize: '20vh', textAlign: 'center'}}>create</i>
            </Link>
          </div>
        </div>
      ) : (
        <div
          className="nav sideNav"
          style={{
            background: props.deleting ? "gray" : "#D8D8D8",
            opacity: props.deleting ? ".5" : "1",
            borderRight: props.deleting
              ? "1px solid gray"
              : "#979797 1px solid",
            height: "100vh"
          }}
        >
          <h1 className="headingforSideNav"> Lambda Notes </h1>
          <div
            className="buttonStyle"
            style={{ opacity: props.deleting ? ".6" : "1" }}
          >
            <Link to="/notes">
              <button> View Your Notes </button>
            </Link>
          </div>
          <div
            className="buttonStyle"
            style={{ opacity: props.deleting ? ".6" : "1" }}
          >
            <Link to="/create" style={{textDecoration: 'none'}}>
              <Create>
                <i className="material-icons" style={{ color: 'white', textDecoration: 'none', fontSize: '20vh', textAlign: 'center'}}>create</i>
                </Create>
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SideNav;
