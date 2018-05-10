import React, { Component } from 'react';
import { createNote, updateNote } from '../actions';
import { connect } from 'react-redux';
import './CreateNote.css';

class EditNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      id: ''
    };
  }
  

  componentDidMount() {
    this.state.id = this.props.match.params.id;
    console.log('eeee', this.props.match)
    // this.props.getNote(id);
  }

  // editNote = ({title, content, id}) => {
  //   this.setState(
  //     () => ({title, content, id, editing: true})
  //   )
  // }; 

  // handleEdit = () => {
  //   const { title, content, id} = this.state;
  //   console.log('Editing', {title,content,id})
  //   this.props.updateNote({title, content, id});
  //   this.setState({title: '', content: '', id: '', editing: false})
  // } 

  render() {
    return (
         
        <div className="createNoteContainer">
        <h3 className="headerNotes">Edit Note:</h3>
        <div className="inputFields">
        <div className="inputTitle">
            <input
                type="text"
                className="title"
                name="title"
                value={this.state.title}
                placeholder="Note Title"
                onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
        </div>
        <div className="inputContent">
            <textarea
                type="text"
                className="content"
                name="content"
                value={this.state.content}
                placeholder="Note Content" 
                onChange={e => this.setState({ [e.target.name]: e.target.value })} >
            </textarea>
        </div>
        </div>
        <div>
        <button className="saveButton"
          onClick={() => {
            console.log('EditNote',{title: this.state.title, content: this.state.content, id: this.state.id});
            this.props.updateNote({ title: this.state.title, content: this.state.content, id: this.state.id});
            this.setState({ title: '', content: '' });
          }}>Update</button>
        </div>
   </div>);
  }
}

const mapStateToProps = state => {
  return {
    updatingNote: state.updatingNote,
    noteUpdated: state.noteUpdated,
    error: state.error
  };
};

export default connect(mapStateToProps, { createNote, updateNote })(EditNote);










// import React from 'react';
// import './EditNote.css';

// export const EditNote = props => {
//     return (
//       <div className="container">
//         <h3 className="headerNotes">Edit Note:</h3>
//         <div className="inputFields">
//           <div className="editTitle">
//             <input
//                 type="text"
//                 className="editNoteTitle"
//                 name="editNoteTitle"
//                 // value={this.state.newTitle}
//                 placeholder="Note Title"
//             />
//           </div>
//           <div className="editContent">
//             <textarea
//                 type="text"
//                 className="editNoteContent"
//                 name="editNoteContent"
//                 // value={this.state.newContent}
//                 placeholder="Note Content" >
//             </textarea>
//           </div>
//         </div>
//         <div>
//           <button className="updateButton">Update</button>
//         </div>
//       </div>
//     )
// };