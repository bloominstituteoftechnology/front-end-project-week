import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Note = (props) => {
  console.log('Note.js props', props);
    return (
      <div className="Note-Container">
        <div>
          <Link to="/edit">Edit</Link>
          <Link to="/">Delete</Link>
        </div>
        <div className="Note-Title">
          {props.notesState.notes[props.match.params.id].title}
        </div>
        <div className="Note-Content">
          {props.notesState.notes[props.match.params.id].content}
        </div>
      </div>
      )
}
// class Note extends React.Component {
//   render () {
//     const props = this.props;
//     console.log('Note.js props', this.props)

//     return (
//       <div className="Note-Container">
//         <div>
//           <Link to="/edit">Edit</Link>
//           <Link to="/">Delete</Link>
//         </div>
//         <div className="Note-Title">
//           {props.notesState.notes[props.match.params.id].title}
//         </div>
//         <div className="Note-Content">
//           {props.notesState.notes[props.match.params.id].content}
//         </div>
//       </div>
//       )
//   }
// }

const mapStateToProps = (state) => {
  return {
    notesState: state,
  }
}

export default connect(mapStateToProps)(Note);
