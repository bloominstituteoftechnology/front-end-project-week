import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../../actions';
import Sidebar from '../Sidebar/Sidebar';
import Modal from '../Modal/Modal';

class Note extends React.Component {
  render() {
    return (
      <div>
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="Note-Container">
          <div>
            <Link to={`/edit/${this.props.match.params.id}`}>Edit</Link>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
          <div className="Note-Title">
            {this.props.state.notes[this.props.match.params.id].title}
          </div>
          <div className="Note-Content">
            {this.props.state.notes[this.props.match.params.id].content}
          </div>
        </div>
      </div>
    )
  }
  handleDelete = (event) => {
    event.preventDefault();
    this.props.deleteNote(this.props.match.params.id);
    this.props.history.push('/');
  }
}

// const Note = (props) => {
//   console.log('Note.js props', props);
//     // props.deleteNote(props.match.params.id)
//   return (
//     <div>
//       <div className="Sidebar">
//         <Sidebar />
//       </div>
//       <div className="Note-Container">
//         <div>
//           <Link to={`/edit/${props.match.params.id}`}>Edit</Link>
//           <button onClick={this.handleDelete}>Delete</button>
//         </div>
//         <div className="Note-Title">
//           {props.state.notes[props.match.params.id].title}
//         </div>
//         <div className="Note-Content">
//           {props.state.notes[props.match.params.id].content}
//         </div>
//       </div>
//     </div>
//   )
// }



const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps, { deleteNote })(Note);
