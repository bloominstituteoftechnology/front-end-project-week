import React from "react";
import styled from "styled-components";

const IndividualNote = styled.div`
  width: 124px;
  max-width: 100%;
  background: white;
  margin-bottom: 14px;
  cursor: move;
`;

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragSrc: null
    };
  }
  handleDragStart = event => {
    event.target.style.opacity = ".35";

    const dragSrc = event.target;
    this.setState({ dragSrc });
    event.target.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", event.target.innerHTML);
  };
  handleDragOver = event => {
    if (event.preventDefault) {
      event.preventDefault();
    }
    event.dataTransfer.dropEffect = "move";

    return false;
  };
  handleDragEnter = event => {
    event.target.classList.add("over");
  };
  handleDragLeave = event => {
    event.target.classList.remove("over");
  };
  handleDrop = event => {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (this.state.dragSrc !== event.target) {
      this.state.dragSrc.innerHTML = event.target.innerHTML;
      event.target.innerHTML = event.dataTransfer.getData("text/html");
    }
    return false;
  };
  handleDragEnd = event => {
    const columns = document.querySelectorAll(".columns");
    columns.forEach(column => {
      column.classList.remove("over");
      column.style.opacity = 1;
    });
  };

  render() {
    const title = this.props.title;
    const lengthPercentage =
      this.props.content.length < 100
        ? this.props.content.length
        : Math.floor(this.props.content.length * 0.05);
    const partialContent = this.props.content.slice(0, lengthPercentage);
    const index = this.props.index;
    return (
      <IndividualNote
        onDragStart={this.handleDragStart}
        className="individual-note column"
        onClick={() => this.props.click(index)}
        draggable="true"
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}
        onDragEnd={this.handleDragEnd}
      >
        <h2 className="individual-title">{title}</h2>
        <br />
        <hr className="note-hr" />
        <p className="individual-content">{partialContent}</p>
      </IndividualNote>
    );
  }
}

export default Note;
