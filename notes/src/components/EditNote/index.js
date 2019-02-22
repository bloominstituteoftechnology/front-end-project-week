import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./editNote.css";
import URL from "../../utils/URL";

class EditNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      textBody: "",
      id: null,
      error: null
    };
  }
  componentDidMount() {
    axios
      .get(`${URL}api/notes/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          title: res.data.title,
          textBody: res.data.textBody,
          id: res.data.id
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  }

  inputHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };

  update = e => {
    e.preventDefault();
    this.props.update({ ...this.state });

    this.setState({
      title: "",
      textBody: "",
      id: null
    });
  };

  render() {
    return (
      <form id="edit_notes_form" onSubmit={this.update}>
        <h2>Edit Note:</h2>
        <input
          onChange={this.inputHandler}
          placeholder="Note Title"
          name="title"
          value={this.state.title}
          required
        />
        <textarea
          onChange={this.inputHandler}
          placeholder="Note Content"
          name="textBody"
          value={this.state.textBody}
          required
        />

        <section className="btn-edit">
          {this.props.updating ? (
            <p className="loading">Updating Note...</p>
          ) : (
            <button type="submit" className="links">
              Update
            </button>
          )}
        </section>
      </form>
    );
  }
}

EditNote.propTypes = {
  update: PropTypes.func.isRequired
};

export default EditNote;
