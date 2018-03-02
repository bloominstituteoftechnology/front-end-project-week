import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import {NavLink} from "react-router-dom";

class NoteListPage extends React.Component {

  render() {
    const {
      notes
    } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <h4>Your Notes</h4>
        </div>
        {notes.map((note, index) => (
          <div
            key={index}
            className="col-md-3 note-thumb"
            style={{backgroundColor: "#eeeeee", margin: "10px", padding: "5px"}}>
            <NavLink to={`/view-note/${note.id}`}>
              <h4>{note.title}</h4>
              <div>
                {note.message}
              </div>
            </NavLink>
          </div>
        ))}

        <div className="row">
          <div className="col-md-12" style={{fontSize: "16px", padding: "30px", color: "grey"}}>
            {notes.length === 0 && (<i>No Notes available! Go ahead and create some.</i>)}
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteListPage);