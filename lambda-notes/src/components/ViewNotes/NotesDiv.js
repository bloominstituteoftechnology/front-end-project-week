import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, CardImg, Card, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchingNotesAction} from "../../actions";
import LambdaLeftDiv from './LambdaLeftDiv';

class NotesDiv extends React.Component {

constructor(props){
        super(props);
        this.state= {
		search: "",
		notesArray:[]
        };

}

componentDidMount() {
	this.props.fetchingNotesAction();
}


changeHandler = event => {
//	this.setState({[event.target.name]: event.target.value});
	let notesArray =this.state.notesArray.slice();
	notesArray = notesArray.filter(item => {
		if(item.title.includes(event.target.value))
                {
                        return item;
                }
                });
                 this.setState({ notesArray:  notesArray});
};



/*searchHandler =event => {
	this.props.
	   <button onClick={this.searchHandler}>Search</button>
};
<form>
        <input className="search-bar" onChange={this.changeHandler} type="text" name="search" placeholder="search"  />
        </form>
*/



/*componentDidUpdate(prevProps,  prevState) {
	console.log('here');
	console.log(prevProps);
	if (prevProps.notes !== this.props.notes){;
		
		this.setState({notesArray: this.props.notes});
	}
}*/



render() {
	
	return (

	<div className="view-list-body">
                <LambdaLeftDiv />


	<div className="note-card-container">
        		
	<div>{this.props.fetching ? (
          null
        ) :(
	
	<div>
	<h3 className="card-body-title">Your Notes:</h3>
	
	<CardDeck>{this.props.notes.map(note =>{
      return(	
	<Link style={{ textDecoration: 'none' }} to={`/note/${note._id}`} onClick={window.scrollTo(0, 0)} key={note._id}><div>
	<Card className="note-card">
	  <CardBody>
          <CardTitle><div className="card-title-div">{note.title.substring(0, 40)}</div></CardTitle>
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
