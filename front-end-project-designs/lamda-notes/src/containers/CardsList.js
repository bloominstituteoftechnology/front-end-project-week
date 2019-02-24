import React, { Component } from "react"
import { connect } from "react-redux"

class CardsList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <h1>Here's the list of cards:</h1>
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(CardsList)
