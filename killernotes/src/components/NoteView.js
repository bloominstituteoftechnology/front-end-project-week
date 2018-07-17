import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote } from '../actions';
import styled from 'styled-components';

const SingleNote = styled.div`
  font-family: raleway;
  padding: 8px;
  margin-left: 300px;
  margin-right: 20px;
  margin-top: 30px;
  word-break: break-all;
  > h2 {
    font-family: Roboto;
  }
`;

const Links = styled.div`
  padding: 20px;
  text-align: right;
  margin-right: 20px;
  > a {
    padding-left: 10px;
    font-family: Roboto;
    color: black;
  }
`;

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: '',
        textBody: '',
        id: '',
      },
    };
  }

  deleteClicked = () => {
    this.props.deleteNote(this.state.id);
  };

  componentDidMount() {
    // get the id from the params
    const id = this.props.match.params.id;
    // only setState when we actually have data
    if (this.props.notes[0]) {
      // filter returns an array
      const note = this.props.notes.filter(n => n._id === id);
      this.setState({
        title: note[0].title,
        textBody: note[0].textBody,
        id: note[0]._id,
      });
    }
  }

  // this is here so refresh and typing in the URL works
  componentWillReceiveProps(newProps) {
    // get the id from the params
    const id = this.props.match.params.id;
    // only setState when we actually have data
    if (newProps.notes[0]) {
      // filter returns an array
      const note = newProps.notes.filter(n => n._id === id);
      this.setState({
        title: note[0].title,
        textBody: note[0].textBody,
        id: note[0]._id,
      });
    }
  }

  render() {
    const { title, textBody, id } = this.state;
    return (
      <React.Fragment>
        <Links>
          <Link to={`/edit/${id}`}> edit </Link>
          <Link to="/" onClick={this.deleteClicked}>
            {' '}
            delete{' '}
          </Link>
        </Links>
        <SingleNote>
          <h2>{title}</h2>
          {textBody}
        </SingleNote>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(
  mapStateToProps,
  { deleteNote },
)(NoteView);
