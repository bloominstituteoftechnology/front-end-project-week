import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, CardImg, Card, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchingNotesAction, searchAction} from "../../actions";
import LambdaLeftDiv from './LambdaLeftDiv';
import Search from './Search';

class NotesDiv extends React.Component {

constructor(props){
        super(props);
        this.state= {
        };

}

componentDidMount() {
	this.props.fetchingNotesAction();
}


viewNotesHandler = (event)=>{
		this.resetSearchField();
		this.props.fetchingNotesAction();
}


/*componentDidUpdate(prevProps,  prevState) {
	console.log('here');
	console.log(prevProps);
	if (prevProps.notes !== this.props.notes){
		this.props.fetchingNotesAction();
		//this.setState({notesArray: this.props.notes});
	}
}*/

resetSearchField = () => {
  document.getElementById("search-field").reset();
}

render() {
	
	return (

	<div className="view-list-body">
                <LambdaLeftDiv viewNotesHandler={this.viewNotesHandler}/>


	<div className="note-card-container">
        <Search id="search-field" />

	<div>{this.props.fetching ? (
          null
        ) :(
	
	<div>
	<h3 className="card-body-title">Your Notes:</h3>
	
	<CardDeck>{this.props.notes.map(note =>{

     	return(	
	<Link style={{ textDecoration: 'none' }} to={`/note/${note.id}`} onClick={window.scrollTo(0, 0)} key={note.id}><div>
	<Card className="note-card">
	 <CardImg top width="100%" src={note.image} alt="Card image cap" />	
	  <CardBody>
          <CardTitle><div className="card-title-div">{note.title.substring(0, 40)}</div></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>{note.content.substring(0, 55)}...</CardText>

        </CardBody>
	  
      </Card>
      </div></Link>)
	})}
    </CardDeck>
		</div>
	)}
		</div>
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


export default connect(mapStateToProps, {fetchingNotesAction, searchAction})(NotesDiv);
