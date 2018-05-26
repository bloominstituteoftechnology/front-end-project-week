import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./NotesContainer.css";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

class NotesContainer extends Component {

    render() {
        return (
            <div className="notesContainer">
                <h4>Your Notes:</h4>
                <div className="notes">
                    {this.props.cards.map((item, index) => {
                        return (
                            <Link className="link" key={item.id + item.title + item.text + index} to={`/notes/${index}`}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardText>{item.text}</CardText>
                                    </CardBody>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null)(NotesContainer)); 