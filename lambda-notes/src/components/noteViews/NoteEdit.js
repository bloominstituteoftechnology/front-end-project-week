import React from 'react';
import {connect} from 'react-redux';
import {editNote, getNote} from '../../actions';

class Note extends React.Component {
  constructor(){
    super();
    this.state = {
      title: null,
      textBody: null,
    }
  }
  componentDidMount(){
    this.props.getNote(this.props.match.params.id);
    console.log("CDM Invoked")
    setTimeout(() => {
      console.log("ST invoked")
      this.setState({
        title: this.props.note.title,
        textBody: this.props.note.textBody,
      })
    }, 300);
  }

  editNoteHandler= e => {
    e.preventDefault();
    console.log(this.state);
    this.props.editNote(this.props.match.params.id, this.state);
    this.props.history.push("/");
  }
  

  inputHandler = e => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render(){


    
    // if (this.state._id !== this.props.match.params.id) {
    //   return (
    //     <div className="wait">
    //       <h2>Loading Editor...</h2>
    //     </div>
    //   )
    // } 
    return(
    
      <div className="edit-note-form">
      <h2>Edit Note</h2>
      <div className="edit-form-container">
        <form>
          <input 
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.inputHandler}
            />
          <input 
            type="text"
            name="textBody"
            value={this.state.textBody}
            onChange={this.inputHandler}
            />
          <button onClick={this.editNoteHandler}>Submit</button>

        </form>
      </div>
    </div>
  )
  


  }
}

const mapStateToProps = state => ({
  note: state.note,
})

export default connect(mapStateToProps, {editNote, getNote})(Note);
