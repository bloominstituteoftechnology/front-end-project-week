import React from "react";
import HeadingTitle from "../common/Titles/HeadingTitle";

class NoteComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      const id = this.props.match.params.id;
      console.log(id);
      this.props.fetchNote(id);
  }
  render() {
    return (
      <div>
        <HeadingTitle>{this.props.note.title}</HeadingTitle>
        <p>{this.props.note.textBody}</p>
      </div>
    );
  }
}

export default NoteComponent;
