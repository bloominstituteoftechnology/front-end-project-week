import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { CardText, CardBody, CardTitle, Col, Card } from "reactstrap";

const StyledListItem = styled.div`
  display: flex;
  font-family: Roboto;

  .card-title {
    padding-bottom: 8px;
    border-bottom: 2px solid grey;
    font-size: 14px;
  }

  .card-text {
    font-size: 12px;
    font-family: "Raleway", regular;
  }
`;

class ListItem extends Component {
  render() {
    return (
      
      <Col sm="4" className="mb-3" key={this.props.note.id}>
      <StyledListItem>
        {/* <Link
          className="link"
          to={`/single-note-view/${this.props.note.id}`}
          style={{ textDecoration: "none" }}
        > */}
          <Card>
            <CardBody className="card" key={this.props.note.id}>
              {/* Tried to place a quick-delete here, but couldn't figure it out
                <button className="quick-delete" onClick={this.props.deleteNote}><b>x</b></button> */}
              <CardTitle className="card-title">
                <b>
                  {this.props.note.title.length > 16
                    ? `${this.props.note.title.substring(0, 15)}...`
                    : this.props.note.title}
                </b>
              </CardTitle>
              <CardText className="card-text">
                {this.props.note.text.length > 100
                  ? `${this.props.note.text.substring(0, 100)}...`
                  : this.props.note.text}
              </CardText>
            </CardBody>
          </Card>
        {/* </Link> */}
        </StyledListItem>
      </Col>
      
    );
  }
}

const mapStateToProp = state => {
  console.log(this.props);
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProp, {})(ListItem);
