import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const StyledViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  h2 {
    padding-top: 25px;
    margin-bottom: 18px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  h3 {
      font-weight: bold;
      margin-bottom:4px;
  }
    .input {
        padding-left: 10px; 
        border-radius: 5px;
        border: 2px solid #D1D0D1;
        ::placeholder {
            font-weight: bold;
            font-size: 14px;
        }
        :focus {
            border: 2px solid darkgrey;
            outline: none;
        }
    }
  .input-title {
    width: 280px;
    margin-bottom: 10px;
    height: 40px;
    }
  }
  .input-content {
    padding-top: 15px;
    padding-left: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    ::placeholder {
      font-weight: bolder;
      font-size: 14px;
}
}

`;

const Button = styled.div`
  background-color: #5eb3bb;
  height: 40px;
  text-align: center;
  margin-left: 2px;
  margin-top: 10px;
  border-radius: 2px;
  display: flex;
  color: white;
  font-weight: bold;
  width: 160px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
`;

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Redirect: false,
      newNote: {
        title: "",
        tags: "",
        body: "",
        id: null
      }
    };
  }
  handleInput = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      newNote: { ...prevState.newNote, [name]: value }
    }));
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    let note = this.props.notes.filter(note => id === note.id.toString());
    note = note[0];
    this.setState({
      newNote: {
        title: note.title,
        body: note.body,
        id: note.id,
        tags: note.tags
      }
    });
  }

//   toggleRedirect = () => {
//     this.setState({
//       Redirect: !this.state.Redirect
//     });
//   };

  render() {
      console.log("push", this.props)
    return (
      <StyledViewWrapper>
        {this.state.Redirect ? (
          <Redirect to={`/note/${this.props.match.params.id}`} />
        ) : null}
        <h2>Edit Note:</h2>

        <StyledForm
          onSubmit={() => {
            this.props.editNote(this.state.newNote, this.props.match.params.id, this.props.history.push);
            // this.toggleRedirect();
          }}
        >
          <input
            name="title"
            placeholder="Note Title"
            onChange={this.handleInput}
            className="input input-title"
            value={this.state.newNote.title}
          />
          <textarea
            name="body"
            rows="15"
            cols="60"
            placeholder="Note Content"
            onChange={this.handleInput}
            className="input input-content"
            value={this.state.newNote.body}
          />
          <Button
            onClick={() => {
              this.props.editNote(this.state.newNote, this.props.match.params.id, this.props.history.push);
              
            }}
          >
            Update
          </Button>
        </StyledForm>
      </StyledViewWrapper>
    );
  }
}

export default EditNote;
