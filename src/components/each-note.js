import React, { Component } from "react";

import TextEllipsis from 'react-text-ellipsis';
import ReactMarkdown from 'react-markdown';


class EachNote extends Component {
  render() {
    const cardText = this.props.body;
    return (      
        <div className="Note">
          <div className="Note__Title">{this.props.title}</div>
          <div className="Note__Body">
            <TextEllipsis lines={6}
              ellipsisChars={" ..."} tagClass={"className"}
              debounceTimeoutOnResize={215} useJsOnly={true}
              onResult={result => {
                if (result === TextEllipsis.RESULT.TRUNCATED)
                  console.log("text get truncated");
                else console.log("text does not get truncated");
              }}>
              <ReactMarkdown source={cardText} />
            </TextEllipsis>
          </div>
          <br />
        </div>
    );
  }
}

export default EachNote;
