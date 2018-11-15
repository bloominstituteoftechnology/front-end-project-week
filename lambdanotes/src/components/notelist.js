import React, { Component } from 'react'

import notecard from './notecard'

export default class notelist extends Component {
  render() {
    return (
      <div>
        {this.props.notes.map(note => {
            return (
                <ul>
                    <notecard
                        title={note.title}
                        content={note.content}
                        id={note.id}
                        key={note.id}
                    />
                </ul>
            );
        })}
      </div>
    )
  }
}
