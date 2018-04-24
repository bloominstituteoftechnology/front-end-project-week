import React, { Component } from 'react';
import Remarkable from 'remarkable';

class Markdown extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  getRawMarkup() {
    const md = new Remarkable();
    return {__html: md.render(this.state.value)};
  }

  render() {
    return (
      <div className="MarkdownContainer">

        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            onChange={event => this.setState({ value: event.target.value })}
            defaultValue={this.state.value}
          />
        </div>

        <div className="output">
          <h3>Markdown</h3>
          <div 
            dangerouslySetInnerHTML={this.getRawMarkup()}
            className="output-text"
          >
          </div>
        </div>

      </div>
    )
  }
}

export default Markdown;