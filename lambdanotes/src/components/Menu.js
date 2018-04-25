import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardText
} from "reactstrap";
import "./Menu.css";

const Menu = props => {
  return (
    <div className="menu">
      <h1>Lambda Notes</h1>
      <br />
      <Link to="/">
        <Button color="info">View Your Notes</Button>
      </Link>
      <br />
      <br />
      <Link to={`/note/${props.notes[props.notes.length - 1].id + 1}`}>
        <Button color="info">+ Create New Note</Button>
      </Link>
    </div>
  );
};

export default Menu;
