import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardText } from "reactstrap";
import "./components.css";

export default class ListView extends Component {
  render() {
    return (
      <div className="notes-container">
        <h1 className="ListView-header">My shitty notes:</h1>
        {this.props.notes.map(notes => {
          return (
            <Link
              key={notes.id}
              className="Notes"
              to={`/notes/${notes.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="notes-cards" key={notes.id}>
                <Card className="single-cards">
                  <CardTitle>Title:<br/> {notes.title}</CardTitle>
                  <CardText>Content:<br/> {notes.content}</CardText>
                </Card>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
