import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchNote, deleteNote, editNote } from '../../actions';

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
        <NoteViewWrapper>
          <NoteHeaderWrapper>Your Notes:</NoteHeaderWrapper>
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
            <SaveButton type="submit" value="Submit Edit" />
          </FormWrapper>
        </NoteViewWrapper>
      );
    }
    return (
      <React.Fragment>
        {this.props.fetching ? (
          <p>Reticulating Splines...</p>
        ) : (
          <NoteWrapper>
            <NoteEditDelete>
              <NoteEditDeleteMargin onClick={() => this.editNoteHandler()}>
                edit
              </NoteEditDeleteMargin>
              <NoteEditDeleteMargin onClick={this.deleteNoteHandler.bind(this)}>
                delete
              </NoteEditDeleteMargin>
            </NoteEditDelete>
            <NoteTitle>{this.props.note.title}</NoteTitle>
            <NoteTextBody>{this.props.note.textBody}</NoteTextBody>
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
  padding: 5px 15px 20px 35px;
  background: #f2f1f2;
`;
const NoteEditDelete = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  padding: 10px 10px 0 0;
`;
const NoteTextBody = styled.div`
  white-space: pre-wrap;
`;
const NoteTitle = styled.h3`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  padding: 40px 0px 35px 0px;
`;

const NoteHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  padding: 70px 0px 35px 35px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 35px 35px;
`;
const TitleInput = styled.input`
  padding: 5px;
  width: 394px;
  height: 47px;
  margin-bottom: 10px;
`;
const TextBodyInput = styled.textarea`
  padding: 5px;
  width: 669px;
  height: 383px;
  margin-bottom: 10px;
`;
const SaveButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 47px;
  border: 1px solid grey;
  background: #24b8bd;
  font-size: 18px;
  text-decoration: none;
  margin-bottom: 15px;
`;
const NoteViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f1f2;
  width: 100%;
`;
const NoteEditDeleteMargin = styled.div`
  margin-left: 10px;
`;
