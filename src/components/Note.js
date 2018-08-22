import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleNote } from "../actions/action";
import PropTypes from "prop-types";

const Note = props => {
  return (
    <div className="ind-card">
      <Link to={`/note/${props.note.id}`}>
        <Card>
          <CardTitle>{props.note.title}</CardTitle>
          <CardText>{props.note.textBody}</CardText>
        </Card>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    singleNote: state.singleNote,
    notes: state
  };
};

export default connect(
  mapStateToProps,
  { fetchSingleNote }
)(Note);

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    textBody: PropTypes.string.isRequired
  })
};
