import React from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from './DeleteNote';
import { Col } from 'reactstrap';

export default class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }
  render() {
    return (
      <Col className='note'>
        <div className='note__options'>
          <Link className='link' to='/notes/edit/:id'>Edit</Link>
          <DeleteNote label='Delete note'/>
        </div>
        <h4>{this.props.match.params.title}</h4>
        <p>{this.props.match.params.content}</p>
      </Col>
    )
  }
}
// const NoteView = props => {
//   return (
//     <Col className='note'>
//       <div className='note__options'>
//         <Link className='link' to='/notes/edit/:id'>Edit</Link>
//         <DeleteNote label='Delete note'/>
//       </div>
//       <h4>{props.title}</h4>
//       <p>{props.content}</p>
//     </Col>
//   )
// }


// export default NoteView;