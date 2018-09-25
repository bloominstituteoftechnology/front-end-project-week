import React, { Component } from 'react'
import  {ellipsis}  from 'react-multiline-ellipsis'
 
class NoteText extends Component {
  render () {
    return <div className = "card-content">{this.props.text}</div>
  }
}
 
export default ellipsis(NoteText, 7, ' ...') 
