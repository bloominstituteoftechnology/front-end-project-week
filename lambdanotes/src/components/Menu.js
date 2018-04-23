import React from "react";
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
      <Button color="info">Hello</Button>
      <br />
      <br />
      <Button color="info">Bye</Button>
    </div>
  );
};

export default Menu;
