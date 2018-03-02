import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import {Button} from "react-bootstrap";

class EditNotePage extends React.Component {

  state = {
    note: {
      title: '',
      message: ''
      
    }
  };

  componentDidMount() {
    const noteId = this.props.match.params.id;

    const note = this.props.notes.filter(e => e.id === Number(noteId))[0];
    this.setState({note});
  }

  setTitle = (event) => {
    const note = this.state.note;
    note.title = event.target.value;
    this.setState({note});
  };

  setMessage = (event) => {
    const note = this.state.note;
    note.message = event.target.value;
    this.setState({note});
  };

  updateNote = event => {
    this.props.actions.updateNoteInStore(this.state.note);
    event.preventDefault(); 
    this.props.history.push(`/view-note/${this.state.note.id}`);
  };

  render() {
    const {
      note
    } = this.state;

    return (
      <form onSubmit={this.updateNote}>
        <h4>Edit Note</h4>
        <div className="row" style={{marginTop: "40px"}}>
          <div className="col-md-5">
            <input
              type="text"
              value={note.title}
              style={{width: "100%"}}
              placeholder="Note Title"
              onChange={this.setTitle}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5" style={{marginTop: "15px"}}>
            <textarea
              value={note.message}
              style={{width: "100%"}}
              rows={5}
              placeholder="Note Message"
              required
              onChange={this.setMessage}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3" style={{marginTop: "15px"}}>
            <Button type="submit">
              Update
            </Button>
          </div>
        </div>
      </form>
    );
  }
}


function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNotePage);