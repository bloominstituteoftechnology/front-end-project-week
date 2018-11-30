// import React from 'react';
// import {connect} from 'react-redux';
// import {getNote} from '../actions';

// class Note extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       title: null,
//       textBody: null,
//     }
//   }
//   componentDidMount(){
//     this.props.getNote(this.props.match.params.id);
//     this.setState({
//       title: null,
//       textBody: null,
//     })
//   }

//   render(){

//     setTimeout(() => {
//       this.setState({
//         title: this.props.note.title,
//         textBody: this.props.note.textBody,
//         id: this.props.note._id,
//       })
//     }, 600);
  
//     if (this.state.id !== this.props.match.params.id) {
//       return (
//         <div className="wait">
//           <h2>Loading Editor...</h2>
//         </div>
//       )
//     } return(
    
//       <div className="edit-note-form">
//       <h2>Edit Note</h2>
//       <div className="edit-form-container">
//         <form>
//           <input 
//             type="text"
//             placeholder="Title"
//             name="title"
//             value={this.state.title}
//              />
//           <input 
//             type="text"
//             placeholder="Write Your note Here"
//             name="textBody"
//             value={this.state.textBody}
//              />
//           <button>Submit</button>

//         </form>
//       </div>
//     </div>
//   )


//   }
// }

// const mapStateToProps = state => ({
//   note: state.note,
// })

// export default connect(mapStateToProps, {getNote})(Note);
import React from 'react';

const NoteEdit = props => {
  return (
    <div>
      <h2>note edit</h2>
    </div>
  )
}

export default NoteEdit;