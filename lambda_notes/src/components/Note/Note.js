import React from 'react';
import { Link } from 'react-router-dom';

class Note extends React.Component {
  state = {
    notes: [
      {title: 'Note1 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note2 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note3 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note4 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note5 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note6 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note7 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
      {title: 'Note8 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    ],  
  }
  render () {
    const props = this.props;
    console.log(this.props)

    return (
      <div className="Note-Container">
        <div className="Note-Title">
          {this.state.notes[props.match.params.id].title}
        </div>
        <div className="Note-Content">
          {this.state.notes[props.match.params.id].content}
        </div>
      </div>
      )
    }
}

export default Note;