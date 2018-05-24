import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import NoteCard_ from "../NoteCard_/NoteCard_";

class ListView extends Component {
  render() {
    const { cards } = this.props;
    const cardsToDisplay = cards.map((card, index) => (
      <Link to={`/note/${index}`}>
        <NoteCard_ key={card.id} card={card} />
      </Link>
    ));

    return (
      <div className="d-flex custom-list-view-container">{cardsToDisplay}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.data
  };
};
export default connect(mapStateToProps)(ListView);
