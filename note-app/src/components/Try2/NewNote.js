import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      notes: "",
      id: ""
    };
  }

  componentDidMount() {
    this.setState({ id: Date.now() });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { title, notes, id } = this.state;
    return (
      <div className="noteContainer">
        <div className="noteView">
          <div className="noteForm">
            <h3>Create New Note:</h3>
            <form>
              <input
                name="title"
                value={title}
                placeholder="Note Title"
                onChange={e => this.handleChange(e)}
              />
              <textarea
                name="notes"
                value={notes}
                placeholder="Note Content"
                onChange={e => this.handleChange(e)}
              />
              <Link
                className="button"
                to="/"
                onClick={() => this.props.addNote({ id, title, notes })}
              >
                Save
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewNote;
