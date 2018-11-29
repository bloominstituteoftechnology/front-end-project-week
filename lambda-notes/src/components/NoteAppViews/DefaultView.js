import React, { Component } from 'react'

import NoteContainer from '../NoteContainer/NoteContainer'

export default class DefaultView extends Component {
  render() {
    return (
      <div>
         <NoteContainer match={this.props.match} />
      </div>
    )
  }
}
