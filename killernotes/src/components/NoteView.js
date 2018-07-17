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
    const id = this.props.match.params.id;
    if (newProps.notes[id]) {
      console.log('new props', newProps.notes[id]);
      const note = newProps.notes[id];
      this.setState({ title: note.title, textBody: note.textBody });
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
