import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  componentDidMount() {
    if (this.props.match) {
      // get current note ID
      const currentID = this.props.match.params.id;
      // get the current note from that ID
      const note = this.props.notes.filter(n => n._id === currentID);
      // fitler returns an array, get the first thing
      this.setState({ title: note[0].title, body: note[0].textBody });
    } else {
      // listing all the notes - not a single via the link
      this.setState({ title: this.props.title, body: this.props.body });
    }
  }

  render() {
    return (
      <div className="noteCard">
        <div className="noteCard__title">
          {this.state.title}
          {/* displays title of notes */}
        </div>
        <div className="noteCard__body">
          {this.state.body}
          {/* displays text of notes */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.rootReducer.notes,
  };
};

export default connect(mapStateToProps)(Note);