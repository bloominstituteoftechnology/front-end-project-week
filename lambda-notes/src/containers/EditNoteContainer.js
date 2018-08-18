import React, {Fragment} from "react";
import NoteForm from "../components/NoteForm";
import findNote from "../selectors";
import { connect } from "react-redux";
import { getNote, editNote } from "../actions";
import { StyledContainer } from '../styled-components/container-styles';

class EditNoteContainer extends React.Component {
  state = {
    title: "",
    textBody: "",
  };

  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
    this.setState({title: this.props.note.title, textBody: this.props.note.textBody})
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title && this.state.textBody) {
      this.props.editNote(this.props.note._id, this.state)
    } 
  }

  render() {
    return (
      <StyledContainer>
        {this.props.note &&
        <Fragment>
        <h1>Edit Note:</h1>
        <NoteForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          title={this.state.title}
          content={this.state.textBody}
        />
        </Fragment>}
        
      </StyledContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  note: findNote(state.notesReducer.notes, ownProps.match.params.id),
  isFetching: state.notesReducer.fetchingNote,
});

export default connect(
  mapStateToProps,
  { getNote, editNote }
)(EditNoteContainer);


