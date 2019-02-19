import React, { Component } from "react";
import axios from "axios";
import Modal from "react-responsive-modal";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Button = styled.button`
border: none;
background-color: #ccffff;
font-size: 1em;
margin: 1em;
`

const SubmitButton = styled(Button)`
border-radius: 5px; //I don't like square buttons
display: flex;
background-color: #4dc3ff;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
width: 30%;
height: 40px;
`

const DeleteButton = styled(Button)`
border-radius: 5px; //I don't like square buttons
display: flex;
background-color: #ff3300
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
width: 60%;
height: 40px;
`

const NoButton = styled(Button)`
border-radius: 5px; //I don't like square buttons
display: flex;
background-color: #4dc3ff;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
width: 60%;
height: 40px;
`

const NoteButtons = styled.div`
display: flex;
justify-content: flex-end;
`

const NoteHeader = styled.div`
margin: 1em;
`

const NoteContainer = styled.div`
background-color: #ccffff;
width: 100%;
`

const NoteBody = styled.div`
margin: 1em;
font-size: 1.1rem;
`

const NoteTitle = styled.div`
margin-top: 1em;
font-weight: bold;
font-size: 1.5rem
`

const EditForm = styled.div`
width: 100%;
background-color: #ccffff;
`

const Edithead = styled.div`
margin: 1em;
`

const EditTitle = styled.div`
margin: 1em;
`

const EditBody = styled.div`
margin: 1em;
`

const ModalContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

const ButtonContainer = styled.div`
display: flex;
`

//NoteView is the class that displays a single note. This class deploys the editNote() and deleteNote() functions, which live in the App.js file

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      open: false
    };
  }

  //Mounts fetched note from fetch() function to state
  componentDidMount() {
    window.scrollTo(0, 0);
    const id = this.props.match.params.id;
    console.log(id);
    this.fetch(id);
  }

  //Fetches an individual note by id and sets its values to state of this component.
  fetch = id => {
    axios
      .get(`https://beplambdanotes.herokuapp.com/api/notes/${id}`)
      .then(res => {
        console.log("noteview", res);
        this.setState(() => ({
          id: res.data._id,
          title: res.data.title,
          textBody: res.data.textBody
        }));
      })
      .catch(err => {
        console.dir(err);
      });
  };

  /****** Edit Handling Functions *******/

  //Toggles the edit form
  toggleEdit = e => {
    e.preventDefault();
    this.setState({ editing: true });
  };

  //Validates form input and then triggers edit() function
  editSubmitHandler = e => {
    e.preventDefault();
    if (this.state.title.length < 1 || this.state.textBody.length < 1) {
      alert("Field cannot be empty!");
    } else {
      this.props.editNote({
        id: this.state.id,
        title: this.state.title,
        textBody: this.state.textBody
      });
      this.setState({
        editing: false
      });
    }
  };

  //Change Handler
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /****** Delete Handling Functions *******/

  //Opens delete modal
  openModal = () => {
    this.setState({ open: true });
  };

  //Closes delete modal
  closeModal = () => {
    this.setState({ open: false });
  };

  //Triggers the delete function and renders the main page view
  delete = e => {
    e.preventDefault();
    this.props.deleteNote(this.state.id);
    this.props.history.push("/");
  };

  render() {
    const { open, title, textBody } = this.state;

    if (this.state.editing) {
      return (
        <EditForm>
          <Edithead>
            <h1>Edit Note:</h1>
          </Edithead>

          <form onSubmit={this.editSubmitHandler}>
            <EditTitle>
              <input
                name="title"
                type="text"
                placeholder="new title"
                value={title}
                onChange={this.handleChange}
                style = {{width: '65%', padding: '10px'}} 
              />
            </EditTitle>
            <EditBody>
              <textarea
                name="textBody"
                type="textarea"
                placeholder="new note"
                value={textBody}
                onChange={this.handleChange}
                style = {{width: '80%', padding: '10px', height: '200px'}} 
              />
            </EditBody>
            <div>
              <SubmitButton>
                Update
              </SubmitButton>
            </div>
          </form>
        </EditForm>
      );
    }

    return (
      <NoteContainer>
        <NoteHeader>
          <NoteButtons>
            <Button type = 'edit' onClick={this.toggleEdit}>
              edit
            </Button>

            <Button type = "delete" onClick={this.openModal}>
              delete
            </Button>
          </NoteButtons>
          <NoteTitle>{this.state.title}</NoteTitle>
        </NoteHeader>
        <NoteBody>
          <p>{this.state.textBody}</p>
        </NoteBody>

        <Modal
          open={open}
          onClose={this.closeModal}
          center
          showCloseIcon={false}
        >
          <ModalContainer>
            <p>Are you sure you want to delete this?</p>
            <ButtonContainer>
                <DeleteButton onClick={this.delete}>
                    Delete
                </DeleteButton>
                <NoButton onClick={this.closeModal}>
                    No
                </NoButton>
            </ButtonContainer>    
          </ModalContainer>
        </Modal>
      </NoteContainer>
    );
  }
}

//Type validation for props
NoteView.propTypes = {
  id: PropTypes.string,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default NoteView;