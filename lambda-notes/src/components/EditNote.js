import React from "react";

export class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      text: ""
    };
  }
  componentDidMount() {
    const note = this.props.notes
      .filter(note => note.id === parseInt(this.props.match.params.id, 10))
      .shift();
    this.setState({ id: note.id, title: note.title, text: note.text });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { history, updateNote, match } = this.props;
    const { id, title, text } = this.state;
    return (
      <div className="col-9 right__side">
        <div className="row">
          <div className="col-3 notes__head">
            <h4>Edit Note:</h4>
          </div>
        </div>
        <div className="row">
          <form
            className="add__form"
            onSubmit={event => {
              event.preventDefault();
              updateNote({
                id: id,
                title: title,
                text: text
              });
              history.push(`/viewnote/${match.params.id}`);
            }}
          >
            <input
              className="input__title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
            <textarea
              cols="66"
              rows="20"
              name="text"
              className="input__text"
              value={this.state.text}
              onChange={this.handleChange}
              required
            />
            <button type="submit" className="save__button">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
