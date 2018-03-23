import React, { Component } from "react";

class NewNote extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: "",
      content: ""
    }
  }

  render() {
    return (
      <div className="newNote">
        <div className="newNote__header">
          <p>Create New Note:</p>
        </div>

        <div className="newNote__input">
          <form className="newNote__form">
            <input className="newNote__form__title" value="  Note Title" />
            <textarea className="newNote__form__content" rows="15" columns="15">
              Note Content
            </textarea>
            <a className="newNote__form__save" href="/"><div className="newNote__form__button">
              <p className="newNote__form__button__text">Save</p>
            </div></a>
          </form>
        </div>
      </div>
      )
  }
}

export default NewNote;