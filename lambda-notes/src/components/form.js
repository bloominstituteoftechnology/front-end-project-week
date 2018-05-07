import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNotes, createNote, updateNote,} from '../actions/index';


class Form extends Component {
  constructor(){
    super()
    this.ids = 0;
  }
  state = {
    title: '',
    content: '',
    id: '',
    editing: false,
  }

  componentDidMount(){
    // console.log('notes',this.props.match);
    this.props.getNotes();
    
  }

  handleChange = (event) => {
    // console.log('event!!!',event.target);
    this.setState( {[event.target.name]: event.target.value} )
  }

  addNote = (e) => {
    e.preventDefault();
    console.log('ADDingnote!!!!!', this.state)
    const newNote = { 
        title: this.state.title,
        content: this.state.content,
        id: this.props.ids,
    }
    this.props.createNote(newNote);
    this.setState({title: '', content: ''});
  }

  editNote = ({title, content, id}) => {
    this.setState(
      () => ({title, content, id, editing: true})
    )
  };

  render(){
    return (
      <div>
        <form>
          <input type='text' name='title' placeholder='Title' onChange={this.handleChange} value={this.state.title}/>
          <textarea name='content' rows="10" cols="30" placeholder='Content' onChange={this.handleChange} value={this.state.content}/>
          {this.state.editing 
            ? <button onClick={this.handleEdit}>Edit Note</button>
            : <button onClick={this.addNote}>Save</button>
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetchingNotes: state.fetchingNotes,
    notesFetched: state.notesFetched,
    notesSaved: state.notesSaved,
    savingNotes: state.savingNotes,
    updatingNote: state.updatingNote,
    noteUpdated: state.noteUpdated,
    notes: state.notes,
  };
}

export default connect(mapStateToProps, {getNotes, createNote, updateNote,})(Form);