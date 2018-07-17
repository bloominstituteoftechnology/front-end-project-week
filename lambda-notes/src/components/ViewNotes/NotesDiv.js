import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, CardImg, Card, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchingNotesAction} from "../../actions";


class NotesDiv extends React.Component {

constructor(props){
        super(props);
        this.state= {
        };

}

componentDidMount() {
	this.props.fetchingNotesAction();
}


/*componentDidUpdate(prevProps,  prevState) {
if (prevProps.notes !== this.props.notes){
	this.props.fetchingNotesAction();
}
}*/



render() {
	
	return (
	<div className="notes-card-container">
        		
	<div>{this.props.fetching ? (
          <h1>Fetching Notes...</h1>
        ) :(

	<div><h3 className="card-body-title">Your Notes:</h3>
	<CardDeck>{this.props.notes.map(note =>{
      return(	
	<Link style={{ textDecoration: 'none' }} to={`/note/${note.id}`}><div key={note.id}>
	<Card className="note-card">
	  <CardBody>
          <CardTitle><div className="card-title-div">{note.title}</div></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>{note.textBody.substring(0, 70)}...</CardText>

        </CardBody>
	  
      </Card>
      </div></Link>)
	})}
    </CardDeck>
		</div>
	)}
		</div>
		</div>
	
	 );

}
}


const mapStateToProps = state => {
  return {
          notes: state.notes,
          fetching: state.fetchingNotes,
	  saving: state.addingNote
  };
};


export default connect(mapStateToProps, {fetchingNotesAction})(NotesDiv);
