import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchNote, deleteNote, editNote } from '../../actions';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
const TitleInput = styled.input`
  padding: 5px;
  width: 394px;
  height: 47px;
`;
const TextBodyInput = styled.textarea`
  padding: 5px;
  width: 669px;
  height: 383px;
`;
const SaveButton = styled.input`
  width: 210px;
  height: 46px;
  border: 1px solid grey;
`;
class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
      edit: false
    };
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
    this.setState({
      title: this.state.title,
      textBody: this.state.textBody
    });
    console.log(`State: ${this.props.note}`);
  }

  deleteNoteHandler() {
    console.log(`Clicked DELETE NOTE button for note: ${this.props}`);
    this.props.deleteNote(this.props.match.params.id);
    setTimeout(() => {
      this.props.history.push('/');
    }, 1000);
  }
  editNoteHandler(event) {
    console.log(
      `Clicked EDIT NOTE button for note: ${this.props.match.params.id}`
    );
    // console.log(this.state.title);
    this.setState({
      title: this.props.note.title,
      textBody: this.props.note.textBody,
      edit: true
    });
  }
  submitHandler = event => {
    event.preventDefault();
    this.props.editNote(this.props.match.params.id, {
      title: this.state.title,
      textBody: this.state.textBody
    });
    console.log(this.props.match.params.id);
    this.setState({
      edit: false
    });
    // setTimeout(() => {
    //   this.props.history.push('/');
    // }, 1000);
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    if (this.state.edit) {
      return (
        <FormWrapper onSubmit={this.submitHandler}>
          <TitleInput
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.changeHandler}
            required
          />
          <TextBodyInput
            // type="text"
            value={this.state.textBody}
            name="textBody"
            onChange={this.changeHandler}
            required
          />
          <SaveButton type="submit" value="Add New Note" />
        </FormWrapper>
      );
    }
    return (
      <React.Fragment>
        {this.props.fetching ? (
          <p>Reticulating Splines...</p>
        ) : (
          <NoteWrapper>
            <NoteEditDelete>
              <div onClick={() => this.editNoteHandler()}>edit</div>
              <div onClick={this.deleteNoteHandler.bind(this)}>delete</div>
            </NoteEditDelete>
            <NoteTitle>{this.props.note.title}</NoteTitle>
            <div className="note-textbody">{this.props.note.textBody}</div>
          </NoteWrapper>
        )}
        {this.props.error ? <p>{this.props.error}</p> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  note: state.note,
  fetching: state.fetching,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchNote, deleteNote, editNote }
)(NoteView);

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid #c8c7c8;
  font-size: 18px;
  width: 100%;
  background: white;
  /* margin-bottom: 25px; */
  padding: 5px 15px 20px 15px;
`;
const NoteEditDelete = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
`;

const NoteTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  border-bottom: solid 1px black;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;
