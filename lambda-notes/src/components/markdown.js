import React, { Component } from 'react';
import Remarkable from 'remarkable';
import styled from 'styled-components';

const Break = styled.section`white-space: pre-line;`;

class Markdown extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      defaultValue: ""
    };
  }

  componentDidMount() {
    const sampleInput = `this can **convert** plain text to **markdown** 
      \n* create\n* bulleted\n* lists\n# header #1\n## header #2\n### header #3
      \n[ here's a link to nowhere! ]() \n *** \n**begin typing to try it yourself!**`;
    this.setState({ value: sampleInput })
  }

  getRawMarkup() {
    const md = new Remarkable();
    return {__html: md.render(this.state.value)};
  }

  render() {
    return (
      <div className="PrimaryContainer MarkdownContainer">

        <div className="input">
          <h3>Input</h3>
          <Break>
            <textarea
              className="input-text"
              onChange={event => this.setState({ value: event.target.value })}
              value={this.state.value}
              // defaultValue={this.state.defaultValue}
            />
          </Break>
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