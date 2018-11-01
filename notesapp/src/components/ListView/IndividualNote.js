import React from "react";
import {
  IndNoteContainer,
  NoteToolDiv,
  IndNoteText,
  IndNoteTitle,
  ToolBtn,
  IndTaskTextDiv,
  TaskDiv
} from "../../Styles/IndividualNoteStyles";
import Modal from "react-modal";
import {
  ModalDiv,
  ModalText,
  NoButton,
  NoButtonText,
  DeleteButtonText,
  DeleteButton
} from "../../Styles/DeleteModalStyles";
import TodoForm from '../NoteChecklist/TodoForm'
import TodoList from '../NoteChecklist/TodoList'

class IndividualNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      modalIsOpen: false,
      todoData: [],
      inputTask: "",
    };
  }

  componentDidMount() {
    const noteId = this.props.match.params.id;
    this.setState({
      note: this.props.notes.find(note => note._id == noteId)
    });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewTask = event => {
    event.preventDefault();
    if (this.state.inputTask === "") {
      return null;
    }

    this.setState({
      todoData: [
        ...this.state.todoData,
        {
          id: Date.now(),
          task: this.state.inputTask,
          completed: false,
          decoration: "taskFontNone"
        }
      ],
      inputTask: ""
    });
  };

  changeBool = index => {
    this.setState({
      todoData: this.state.todoData.map((task, idx) => {
        if (index !== idx) {
          return task;
        } else {
          return {
            ...task,
            completed: task.completed === false ? true : false,
            decoration:
              task.decoration === "taskFontNone" ? "taskFont" : "taskFontNone"
          };
        }
      })
    });
  };

  clearTask = event => {
    event.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter(task => !task.completed)
    });
  };

  render() {
    const { title, textBody, tags } = this.state.note;
    return (
      <IndNoteContainer>
        <NoteToolDiv>
          <ToolBtn
            onClick={ev => {
              this.props.toggleEditNoteForm(ev, this.state.note);
              this.props.history.push("/form");
            }}
          >
            edit
          </ToolBtn>{" "}
          <ToolBtn onClick={() => this.openModal()}>delete</ToolBtn>
        </NoteToolDiv>
        <IndNoteTitle>{title}</IndNoteTitle>
        <IndTaskTextDiv>
        <IndNoteText>{textBody}</IndNoteText>
        <TaskDiv>
        <TodoForm
          changeHandler={this.changeHandler}
          addNewTask={this.addNewTask}
          inputTask={this.state.inputTask}
          clearTask={this.clearTask}
        />

        <TodoList taskData={this.state.todoData} changeBool={this.changeBool} />
        </TaskDiv>
        </IndTaskTextDiv>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <ModalText>Are you sure you want to delete?</ModalText>
          <ModalDiv>
            <DeleteButton
              onClick={ev => {
                this.props.deleteNote(ev, this.props.match.params.id);
                this.props.history.push("/home");
              }}
            >
              <DeleteButtonText>Delete</DeleteButtonText>
            </DeleteButton>
            <NoButton onClick={() => this.closeModal()}>
              <NoButtonText>No</NoButtonText>
            </NoButton>
          </ModalDiv>
        </Modal>
           
        <IndNoteText>{tags}</IndNoteText>
      </IndNoteContainer>
    );
  }
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(242, 241, 242, 0.75)"
  },
  content: {
    position: "absolute",
    top: "200px",
    left: "30%",
    right: "30%",
    bottom: "55%",
    border: "1px solid #b7b7b7",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "none",
    outline: "none",
    padding: "20px"
  }
};

export default IndividualNote;
