import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import TextEllipsis from 'react-text-ellipsis';


class ListView extends Component {
	state = {
		notes: this.props.notes
	};



    render() {
    const context = this.state.notes.map(note => (
      <div key={note.id}>
        <Card className="List">
          <CardBody className="Note">
            <CardTitle className="Note__Title">{note.title}</CardTitle>
            <CardText className="Note__Body">
	        <TextEllipsis 
	        lines={5} 
	        tag={'p'} 
	        ellipsisChars={' ...'} 
	        tagClass={'className'} 
	        debounceTimeoutOnResize={200} 
	        useJsOnly={true} 
	        onResult={(result) => { 
	            if (result === TextEllipsis.RESULT.TRUNCATED)
	                console.log('text get truncated');
	            else 
	                console.log('text does not get truncated');
	            }}> 
	            {note.body}
	    	</TextEllipsis> 
    	</CardText>
          <br />
          </CardBody>
        </Card>
      </div>
    ));
    return (
      <React.Fragment>
      <div className="ListView">
        <h1 className="List__Title">Your Notes: </h1> 
        </div>  
        {context}
      </React.Fragment>
    );
  }
}

export default ListView;