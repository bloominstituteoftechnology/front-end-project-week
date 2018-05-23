import React, { Component } from "react";
import Button_ from '../Button_/Button_';

class Form_ extends Component {
  render() {
    return (
      <form className="custom-form" >
        <div className="form-group">
          <input
            type="text"
            className="custom-input"
            id="exampleFormControlInput1"
            placeholder="Note Title"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control custom-text-area"
            id="exampleFormControlTextarea1"
            rows="13"
            placeholder="Note Content"
          />
        </div>
        <Button_ text="Save" />
      </form>
    );
  }
}

export default Form_;
