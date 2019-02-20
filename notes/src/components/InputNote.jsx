import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";
const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "ADD",
      title: "",
      body: "",
      checklistAdd: "",
      tags: [],
      checklist: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      const filtNote = this.props.notes.filter(e => {
        if (e.id === Number(this.props.match.params.id)) {
          return true;
        } else {
          return false;
        }
      });
      if (filtNote[0]) {
        this.setState({
          title: filtNote[0].title,
          body: filtNote[0].body,
          mode: "EDIT",
          tags: filtNote[0].tags,
          checklist: filtNote[0].checklist
        });
      }
    }
  }
  addToChecklist = () => {
    if (this.state.checklistAdd === "") {
      return;
    }
    let prevChecklist = this.state.checklist;
    const checkObj = { checked: false, name: this.state.checklistAdd };
    prevChecklist.push(checkObj);
    this.setState({
      checklist: prevChecklist
    });
  };
  removeFromChecklist = event => {
    const prevChecklist = this.state.checklist;
    let moddedChecklist = prevChecklist.filter(e => {
      if (e.name !== event.target.id) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({
      checklist: moddedChecklist
    });
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
      if (this.props.match.params.id) {
        const filtNote = this.props.notes.filter(e => {
          if (e.id === Number(this.props.match.params.id)) {
            return true;
          } else {
            return false;
          }
        });
        if (filtNote[0]) {
          this.setState({
            title: filtNote[0].title,
            body: filtNote[0].body,
            mode: "EDIT",
            tags: filtNote[0].tags,
            checklist: filtNote[0].checklist
          });
        }
      }
    }
  }
  submit = e => {
    e.preventDefault();
    this.state.mode === "ADD"
      ? this.props.add({
          body: this.state.body,
          title: this.state.title,
          tags: this.state.tags.map(e => {
            return e.text;
          }),
          checklist: this.state.checklist
        })
      : this.props.edit({
          body: this.state.body,
          title: this.state.title,
          id: Number(this.props.match.params.id),
          tags: this.state.tags.map(e => {
            return e.text;
          }),
          checklist: this.state.checklist
        });

    this.props.history.push("/");
  };
  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.addToChecklist();
      this.setState({
        checklistAdd: ""
      });
    }
  };
  render() {
    const { tags } = this.state;

    return (
      <div className="notesViewContainer">
        <div className="viewTitle">
          {this.state.mode === "ADD" ? "Create New" : "Edit"} Note:
        </div>
        <br />
        <form className="formLayout" id="createNoteForm" onSubmit={this.submit}>
          <input
            required
            maxLength="50"
            type="text"
            className="notesubmit"
            placeholder={this.state.mode === "ADD" ? "Note Title" : ""}
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <br />
          <textarea
            required
            className="notesubmit"
            form="createNoteForm"
            name="body"
            placeholder={this.state.mode === "ADD" ? "Note Content" : ""}
            value={this.state.body}
            onChange={this.handleInputChange}
          />
          <br />
          <button className="sidebarButton">
            {this.state.mode === "ADD" ? "Save" : "Update"}
          </button>
        </form>
        <div className="checklistContainer">
          <div className="tagtitle">Checklist:</div>
          <br />
          <input
            type="text"
            className="notesubmit"
            name="checklistAdd"
            placeholder="Add Item to Checklist"
            value={this.state.checklistAdd}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />
          <div className="checklistresults">
            {this.state.checklist.map((e, i) => {
              return (
                <div key={i} className="checkListItem">
                  {e.name}{" "}
                  <span
                    id={e.name}
                    className="removeButton"
                    onClick={this.removeFromChecklist}
                  >
                    x
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <br />
        <div className="tagtitle">Tags:</div>
        <ReactTags
          tags={tags}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          delimiters={delimiters}
          inline
        />
      </div>
    );
  }
}

export default CreateNote;
