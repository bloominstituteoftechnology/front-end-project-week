import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {fetchingItems} from '../../actions/index';
import NoteCard_ from "../NoteCard_/NoteCard_";

class ListView extends Component {
  componentDidMount() {
    this.props.fetchingItems();
  }
  
  render() {
    const { cards } = this.props;
    const cardsToDisplay = cards.map((card, index) => (
      <Link to={`/note/${card.id}`} ><NoteCard_ key={card.id + index} card={card} /></Link>
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
export default connect(mapStateToProps, {fetchingItems})(ListView);
