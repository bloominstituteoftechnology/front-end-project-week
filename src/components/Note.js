import React from "react";
import "./styles.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.textBody.length < 100) {
      return (
        <div className="note">
          <h2>{this.props.title}</h2>
          <hr />
          <p>{this.props.textBody}</p>
        </div>
      );
    } else {
        let content = this.props.textBody;
        const arr = content.split('');
        arr.splice(100);
        content = arr.join('');
      return (
        <div className="note">
          <h2>{this.props.title}</h2>
          <hr />
          <p>{content}</p>
        </div>
      );
    }
  }
}

export default Note;
