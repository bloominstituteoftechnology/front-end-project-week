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
            <input className="newNote__form__title" />
            <input className="newNote__form__content" />
            <input value="Save" type="button" className="newNote__form__button" />
          </form>
        </div>
      </div>
      )
  }
}

export default NewNote;