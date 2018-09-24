import React from "react";
import { connect } from "react-redux";

import { deleteNote } from "../../store/actions";

class ViewPage extends React.Component {
  state = {
    note: {}
  }

  filterProps = () => {
    this.props.notes.forEach(note => {
      if (parseInt(this.props.match.params.id, 10) === note.id) {
        this.setState({note});
      }
    });
  };

  componentWillMount() {
    this.filterProps();
  }

  render() {
    return (
      <div>
        <button>Edit</button>
        <button>Delete</button>
        <div>
          <h3>{this.state.note.title}</h3>
          <p>{this.state.note.description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { deleteNote }
)(ViewPage);
