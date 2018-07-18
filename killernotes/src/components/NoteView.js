import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote, editing } from '../actions';
import styled from 'styled-components';
import ModalDelete from './ModalDelete';

const NoteDiv = styled.div`
  background-color: #f3f3f3;
  padding-left: 18px;
  margin-left: 233px;
  margin-right: 20px;
  margin-top: 16px;
  word-break: break-all;
  border: 1px solid rgb(151, 151, 151);
  width: 646px;
  height: 1024px;
  > p {
    margin-top: 55px;
    font-size: 22px;
    font-family: roboto;
    margin-left: 22px;
  }
`;

const SingleNote = styled.div`
  font-family: raleway;
  padding: 8px;
  margin-left: -2px;
  margin-right: 20px;
  margin-top: -26px;
  word-break: break-all;
  > h2 {
    font-family: Roboto;
  }
`;

const Links = styled.div`
  padding: 17px;
  text-align: right;
  margin-right: 5px;
  > a {
    padding-left: 10px;
    font-family: Roboto;
    color: black;
  }
`;

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.div = React.createRef();
    this.state = {
      note: {
        title: '',
        textBody: '',
        id: '',
      },
      editing: false,
      modal: false,
    };
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  toggleEdit = () => {
    this.props.editing();
  };

  deleteClicked = () => {
    this.props.deleteNote(this.state.id);
    const body = document.body;
    body.style.backgroundColor = 'rgb(243, 243, 243)';
    this.props.history.push('/');
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

    //scroll to the top
    window.scrollTo(0, 0);
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
    const body = document.body;
    body.style.backgroundColor = this.state.modal
      ? 'rgb(100, 100, 100, .9)'
      : 'rgb(243, 243, 243)';
    return (
      <NoteDiv>
        <ModalDelete
          modal={this.state.modal}
          delete={this.deleteClicked}
          toggleModal={this.toggleModal}
        />
        <Links>
          <Link to={`/edit/${id}`} onClick={this.toggleEdit}>
            edit{' '}
          </Link>
          <Link to="#" onClick={this.toggleModal}>
            delete
          </Link>
        </Links>
        <SingleNote innerRef={this.div}>
          <h2>{title}</h2>
          {textBody}
        </SingleNote>
      </NoteDiv>
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
  { editing, deleteNote },
)(NoteView);
