import React from "react";
import "bulma/css/bulma.css";
import { Link } from 'react-router-dom';
class GeneralForm extends React.Component {
  render() {
    return (
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="field">
            <div className="control">
              <input
                className="input is-large"
                type="text"
                name="title"
                value={this.state.title}
                placeholder="Note Title"
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="field">
            <textarea
              className="textarea"
              name="body"
              value={this.state.body}
              placeholder="Note Content"
              rows="10"
              onChange={this.changeHandler}
            />
          </div>
          <Link to="/">
            <GeneralBtn width="15rem" onClick={this.postNote}>
              Save
            </GeneralBtn>
          </Link>
        </form>
    );
  }
}

export default GeneralForm;
