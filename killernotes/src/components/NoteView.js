import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: '',
        textBody: '',
      },
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(newProps) {
    // get the id from the URL
    const id = this.props.match.params.id;
    console.log('id in noteView', id);
    // only setState when we actually have data
    if (newProps.notes[0]) {
      console.log('NOTENOTENOTE:', newProps.notes);
      const note = newProps.notes.filter(n => n._id === id);
      console.log('FOUND NOTE', note[0]);
      this.setState({
        title: note[0].title,
        textBody: note[0].textBody,
      });
    }
  }

  render() {
    const { title, textBody } = this.state;
    return (
      <div style={{ marginLeft: '300px' }}>
        <h2>{title}</h2>
        {textBody}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(NoteView);
