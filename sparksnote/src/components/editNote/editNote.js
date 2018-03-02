import React, { Component } from "react";

class EditNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      note: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      title: this.props.note.title,
      note: this.props.note.note
    })
  }

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleChangeNote = (event) => {
    this.setState({
      note: event.target.value
    })
  }

  render() {
    return (
      <div className="editNote">
        <div className="editNote__header">
          <p className="editNote__header__text">Edit Note:</p>
        </div>

        <div className="editNote__input">
          <form className="editNote__form">
            <input className="editNote__form__title" value={this.state.title} onChange={this.handleChangeTitle} />
            <textarea className="editNote__form__content" value={this.state.note} onChange={this.handleChangeNote}>
              <p>{this.state.note}</p>
            </textarea>
            <a className="editNote__form__save" href="/"><div className="editNote__form__button">
              <p className="editNote__form__button__text">Save</p>
            </div></a>
          </form>
        </div>
      </div>
    )
  }
}

export default EditNote;