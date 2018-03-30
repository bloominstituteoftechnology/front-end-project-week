import React from "react";
import { Link } from "react-router-dom";

import TextEllipsis from 'react-text-ellipsis';
import { Markdown } from 'react-showdown';
import { SortableElement } from 'react-sortable-hoc';


const EachNote = SortableElement(props => {
    const cardText = props.note.body;
    return (
      <Link className="List__View__Link" to={`/view/${props.note.id}`} onClick={() => {props.handleListView(props.note.id)}}> 
        <div className="Note">
          <div className="Note__Title">{props.note.title}</div>
          <div className="Note__Body">
            <TextEllipsis lines={6}
              ellipsisChars={" ..."} tagClass={"className"}
              debounceTimeoutOnResize={215} useJsOnly={true}
              onResult={result => {
                if (result === TextEllipsis.RESULT.TRUNCATED);
              }}>
              <Markdown markup={cardText} strikethrough="true" tasklists="true" />
            </TextEllipsis>
          </div>
          <br />
        </div>
      </Link>
    );
  });

export default EachNote;
